import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { doubleCsrf } from "csrf-csrf";
import cookieParser from "cookie-parser";
import morgan from "morgan"
import authRoutes from "./routes/auth.js"
import { configDotenv } from "dotenv"
configDotenv({ path: './development.env' }) //  Change to 'production.env' when deploying

// create express app
const app = express()

// db
let dbConnection;
const startDb = async () => {
    try {
        if (!dbConnection) {
            await mongoose.connect(process.env.DATABASE_URL)
        }
        return dbConnection
    } catch (error) {
        throw new Error(error)
    }
}
startDb()

const {
    generateToken,
    doubleCsrfProtection,
} = doubleCsrf({
    getSecret: () => "Secret",
    cookieName: "_csrf",
    size: 64,
    getTokenFromRequest: (req) => req.headers["_csrf"],
});

// apply middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(cookieParser())
app.use(doubleCsrfProtection);

// protected routes with csrf-token
app.get("/api/csrf-token", (req, res) => {
  const csrfToken = generateToken(req, res);
  res.json({ csrfToken });
});

// routes
app.use("/api/auth/", authRoutes)


// port 
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))