import { configDotenv } from "dotenv";
configDotenv();

export const PORT = process.env.PORT;
export const ORIGIN_URL = process.env.ORIGIN_URL;
export const CLIENT_URL = process.env.CLIENT_URL;
export const SERVER_URL = process.env.SERVER_URL;
export const MONGO_URI = process.env.MONGO_URI;
export const MONGO_PASSWORD = process.env.MONGO_URI;
export const JWT_SECRET = process.env.MONGO_URI;
export const GMAIL_HOST = process.env.MONGO_URI;
export const GMAIL_PORT = process.env.MONGO_URI;
export const GMAIL_USER = process.env.MONGO_URI;
export const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

export const processEnv = {
  PORT,
  ORIGIN_URL,
  CLIENT_URL,
  SERVER_URL,
  MONGO_URI,
  MONGO_PASSWORD,
  JWT_SECRET,
  GMAIL_HOST,
  GMAIL_PORT,
  GMAIL_USER,
  GMAIL_PASSWORD,
};
