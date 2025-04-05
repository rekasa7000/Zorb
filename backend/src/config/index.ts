import dotenv from "dotenv";

dotenv.config();

interface Config {
  PORT: number;
  NODE_ENV: string;
  MONGODB_URI: string;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 3000,
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGODB_URI: process.env.MONGODB_URI || "",
};

export default config;
