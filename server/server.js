import express from "express"
import cors from "cors"
import mongoose from "mongoose"
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

// apply middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/api/auth/", authRoutes)

// port 
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))