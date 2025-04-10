import { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  res.status(error.status || 500).json({
    message: error.message || "Internal Server Error",
  });
};

export const logError = (context: string, error: unknown) => {
  if (error instanceof Error) {
    console.error(`${context}:`, error.message);
  } else {
    console.error(`${context}:`, error);
  }
};
