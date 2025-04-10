import express from "express";
import { authRouter } from "./routes";
import { config } from "./config";
import { connectDatabase } from "./lib";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(config.PORT, () => {
  console.log("Running on port: ", config.PORT);
  connectDatabase();
});
