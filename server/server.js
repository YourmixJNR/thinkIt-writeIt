import express from "express";
import cors from "cors";
import startDb from "./config/db.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { configDotenv } from "dotenv";
import { doubleCsrfProtection } from "./config/csrfToken.js";
configDotenv({ path: "./development.env" }); //  Change to 'production.env' when deploying
import indexRouter from "./routes/index.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import csrfRouter from "./routes/csrf.js";

// create express app
const app = express();

// db
startDb();

// apply middleware
app.use(cors());
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

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
