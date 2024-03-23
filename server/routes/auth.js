import express, { response } from "express"

const router = express.Router()

router.use("/register", (req, res) => {
    res.send("Register Endpoint")
})