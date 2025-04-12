import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { AppError } from "../utils/error";
import { generateToken } from "../lib/auth";
import { asyncHandler, cloudinary } from "../lib";
import { Signin, Signup, UpdateProfile } from "../schemas";
import { AuthenticatedRequest } from "../middlewares";
import { UserInformation } from "../types";
import { sendResponse } from "../utils/response";
import logger from "../utils/logger";

export const signup = asyncHandler(async (req: Request, res: Response) => {
  const userDetails: Signup = req.body;
  const user = await User.findOne({ email: userDetails.email });

  if (user) {
    logger.warn({ email: userDetails.email }, "Duplicate signup attempt");
    throw new AppError("User already exists", 400);
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userDetails.password, salt);

  const newUser = new User({
    firstName: userDetails.firstName,
    lastName: userDetails.lastName || undefined,
    email: userDetails.email,
    password: hashedPassword,
  });

  generateToken(newUser._id, res);
  await newUser.save();
  logger.info({ userId: newUser._id }, "User registered");

  return sendResponse(
    res,
    {
      _id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      profilePicture: newUser.profilePicture,
    },
    201,
    "User created"
  );
});

export const signin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const userDetails: Signin = req.body;
    const user = await User.findOne({ email: userDetails.email });

    if (!user) {
      logger.warn(
        { email: userDetails.email },
        "Signin attempt - email not found"
      );
      throw new AppError("Invalid credentials", 400);
    }

    const isPasswordCorrect = await bcrypt.compare(
      userDetails.password,
      user.password
    );

    if (!isPasswordCorrect) {
      logger.warn("Incorrect password for ", userDetails.email);
      throw new AppError("Incorrect Password", 400);
    }

    generateToken(user._id, res);

    logger.info({ userId: user._id }, "User signed in");

    return sendResponse(
      res,
      {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePicture: user.profilePicture,
      },
      200,
      "Signin successful!"
    );
  }
);

export const logout = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    res.cookie("zorb-jwt", "", { maxAge: 0 });

    logger.info(req.user?._id, "User logout");
    return sendResponse(res, null, 200, "Logout successful");
  }
);

export const updateProfile = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      logger.warn("User not authenticated");
      throw new AppError("User not authenticated", 404);
    }
    const profile: UpdateProfile = req.body;
    const user: UserInformation = req.user;

    const upload = await cloudinary.uploader.upload(profile.profilePicture);
    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      {
        profilePicture: upload.secure_url,
        firstName: profile.firstName,
        lastName: profile.lastName,
      },
      { new: true }
    );

    logger.info(req.user?._id, "User profile updated");
    return sendResponse(res, updatedUser, 200, "Profile updated successfully");
  }
);

export const checkAuth = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    logger.info(`${req.user?.email} - User authenticated`);
    return sendResponse(res, req.user, 200, "Authenticated");
  }
);
