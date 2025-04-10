import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { logError } from "../utils";
import { config } from "../config";
import { User } from "../models";
import { UserInformation } from "../types/user.type";
import { Document } from "mongoose";

export interface AuthenticatedRequest extends Request {
  user?: Document<unknown, any, UserInformation> & UserInformation;
}

export const isAuthenticated = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies["zorb-jwt"];

    if (!token) {
      res.status(401).json({ message: "Unauthorized - No Token Provided" });
      return;
    }

    const decoded = jwt.verify(token, config.JWT_SECRET) as JwtPayload;

    if (!decoded) {
      res.status(401).json({ message: "Unauthorized - Invalid Token" });
      return;
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    req.user = user;
    next();
  } catch (error) {
    logError("Error in validating cookie: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
