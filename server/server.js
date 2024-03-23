import express from "express"
import cors from "cors"
import { readdirSync } from "fs"
const morgan = require("morgan")
require("dotenv").config({ path: './development.env' }); //  Change to 'production.env' when deploying

// create express app
const app = express()

// apply middleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

// routes
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)))

// port 
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))