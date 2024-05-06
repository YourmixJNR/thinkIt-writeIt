import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";
import { configDotenv } from "dotenv";
import { processEnv } from "./lib/processEnv.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import subscriberRouter from "./routes/subscriber.js";
import profileRouter from "./routes/profile.js";

configDotenv();

// create express app
const app = express();

// cors setup
app.use(
  cors({
    origin: `${processEnv.ORIGIN_URL}`,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const viewsPath = path.join(__dirname, ".", "views");
app.set("views", viewsPath);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, ".", "public")));

// apply middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// routes
app.use("/api/auth/", authRouter);
app.use("/api/", userRouter);
app.use("/api/", subscriberRouter);
app.use("/api/", profileRouter);

// Home Route
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the API",
    data: null,
  });
});

// Undefined route
app.get("*", (req, res) => {
  return res.status(404).send({
    message: "Route not found",
    data: false,
  });
});

export default app;
