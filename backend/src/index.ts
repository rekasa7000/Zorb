import express, { NextFunction, Request, Response } from "express";
import { authRouter, messageRouter } from "./routes";
import { config } from "./config";
import { connectDatabase } from "./lib";
import cookieParser from "cookie-parser";
import { AppError } from "./utils";
import { errorHandler } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new AppError("Not Found", 404));
});

app.use(errorHandler);

app.listen(config.PORT, () => {
  console.log("Running on port: ", config.PORT);
  connectDatabase();
});
