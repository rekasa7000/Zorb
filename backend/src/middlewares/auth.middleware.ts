import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config";
import { User } from "../models";
import { UserInformation } from "../types/user.type";
import { Document } from "mongoose";
import { AppError } from "../utils";
import { asyncHandler } from "../lib";
import logger from "../utils/logger";

export interface AuthenticatedRequest extends Request {
  user?: Document<unknown, any, UserInformation> & UserInformation;
}

export const isAuthenticated = asyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.cookies["zorb-jwt"];

    if (!token) {
      logger.warn("Auth failed: No token provided");
      throw new AppError("Unauthorized - No Token Provided", 401);
    }

    const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayload;

    if (!decoded) {
      logger.warn("Auth failed: Invalid Token");
      throw new AppError("Unauthorized - Invalid Token", 401);
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      logger.warn({ userId: decoded.userId }, "Auth failed: User not found");
      throw new AppError("User does not exist", 401);
    }

    req.user = user;
    logger.info({ userId: user._id }, "Auth succeeded");
    next();
  }
);
