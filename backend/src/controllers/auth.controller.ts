import { Request, Response } from "express";

export const signup = (req: Request, res: Response) => {
  console.log("signup route here!");
};

export const signin = (req: Request, res: Response) => {
  console.log("signin route here!");
};

export const logout = (req: Request, res: Response) => {
  console.log("logout route here!");
};
