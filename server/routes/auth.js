// import express from "express"
import { Router } from "express"

const authRoutes = Router()

// controllers
import { register } from "../controllers/auth.js"

authRoutes.get("/register", register)

export default authRoutes