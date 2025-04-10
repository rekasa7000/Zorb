import mongoose from "mongoose";
import config from "../config/config";

export const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(config.MONGODB_URI);
    console.log("MongoDB connected: ", conn.connection.host);
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};
