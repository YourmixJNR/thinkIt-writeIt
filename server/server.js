import express from "express";
import cors from "cors";
import startDb from "./config/db.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";
import { configDotenv } from "dotenv";
import { doubleCsrfProtection } from "./config/csrfToken.js";
import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import csrfRouter from "./routes/csrf.js";
import subscriberRouter from "./routes/subscriber.js";
import profileRouter from "./routes/profile.js";

configDotenv();

// create express app
const app = express();

// cors setup
app.use(
  cors({
    origin: "https://think-it-write-it.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

// db
startDb();

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
app.use(doubleCsrfProtection);

// protected routes with csrf-token
app.use("/api", csrfRouter);

// routes
app.use("/api", indexRouter);
app.use("/api/auth/", authRouter);
app.use("/api/", userRouter);
app.use("/api/", subscriberRouter);
app.use("/api/", profileRouter);

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
