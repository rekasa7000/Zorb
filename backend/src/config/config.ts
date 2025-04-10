import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number;
  NODE_ENV: string;
  MONGODB_URI: string;
  JWT_SECRET: string;
  CLOUDINARY_NAME: string;
  CLOUDINARY_SECRET: string;
  CLOUDINARY_KEY: string;
}

const env = process.env;

const config: Config = {
  PORT: Number(env.PORT) || 3000,
  NODE_ENV: env.NODE_ENV || "development",
  MONGODB_URI: env.MONGODB_URI || "",
  JWT_SECRET: env.JWT_SECRET || "",
  CLOUDINARY_NAME: env.CLOUDINARY_NAME || "",
  CLOUDINARY_SECRET: env.CLOUDINARY_SECRET || "",
  CLOUDINARY_KEY: env.CLOUDINARY_KEY || "",
};

export default config;
