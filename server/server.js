import express from "express"
import cors from "cors"
import morgan from "morgan"
import authRoutes from "./routes/auth.js"
import { configDotenv } from "dotenv"
configDotenv({path: './development.env'}) //  Change to 'production.env' when deploying

// create express app
const app = express()

// apply middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use("/api/auth/", authRoutes)

// port 
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))