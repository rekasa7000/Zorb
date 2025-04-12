import { Response } from "express";
import { asyncHandler } from "../lib";
import { AuthenticatedRequest } from "../middlewares";
import { User } from "../models";
import { AppError } from "../utils";
import { sendResponse } from "../utils/response";

export const getUsersForSidebar = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    if (!req.user) {
      throw new AppError("User does not exist", 400);
    }
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    return sendResponse(res, filteredUsers, 200);
  }
);
