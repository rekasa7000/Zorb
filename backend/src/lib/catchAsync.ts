import { NextFunction, Request, Response } from "express";

export const catchAsync = (fn: any) => {
  return function (req: Request, res: Response, next: NextFunction) {
    fn(req, res, next).catch(next);
  };
};
