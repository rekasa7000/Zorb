import express from "express";
import config from "./config";
import authRoutes from "./routes/auth.route";
import { connectDatabase } from "./lib/database";

const app = express();

app.use("/api/auth", authRoutes);

app.listen(config.PORT, () => {
  console.log("Running on port: ", config.PORT);
  connectDatabase();
});
