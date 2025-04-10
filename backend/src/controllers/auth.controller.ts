import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
import { logError } from "../utils/error";
import { generateToken } from "../lib/auth";
import { catchAsync, cloudinary } from "../lib";
import { Signin, Signup, UpdateProfile } from "../schemas";
import { AuthenticatedRequest } from "../middlewares";
import { UserInformation } from "../types";

export const signup = catchAsync(async (req: Request, res: Response) => {
  const userDetails: Signup = req.body;
  try {
    const user = await User.findOne({ email: userDetails.email });

    if (user) return res.status(400).json({ message: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userDetails.password, salt);

    const newUser = new User({
      firstName: userDetails.firstName,
      lastName: userDetails.lastName || undefined,
      email: userDetails.email,
      password: hashedPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        profilePicture: newUser.profilePicture,
      });
    }
  } catch (error) {
    logError("Error in signup controller: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export const signin = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userDetails: Signin = req.body;
    try {
      const user = await User.findOne({ email: userDetails.email });

      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isPasswordCorrect = await bcrypt.compare(
        userDetails.password,
        user.password
      );

      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect Password" });
      }

      generateToken(user._id, res);

      res.status(200).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePicture: user.profilePicture,
      });
    } catch (error) {
      logError("Error in siginin controller: ", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export const logout = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.cookie("zorb-jwt", "", { maxAge: 0 });
      res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
      logError("Error in logout controller: ", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export const updateProfile = catchAsync(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        return res.status(404).json({ message: "User not authenticated" });
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

      res.status(200).json(updatedUser);
    } catch (error) {
      logError("Error in Update Profile controller: ", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

export const checkAuth = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    logError("Error in User Checking: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
