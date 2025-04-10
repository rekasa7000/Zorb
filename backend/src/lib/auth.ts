import { Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

export const generateToken = (userId: Object, res: Response) => {
  const token = jwt.sign({ userId }, config.JWT_SECRET, { expiresIn: "7d" });

  res.cookie("zorb-jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
