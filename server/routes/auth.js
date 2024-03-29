// import express from "express"
import { Router } from "express"

const authRoutes = Router()

// controllers
import { register, login } from "../controllers/auth.js"

authRoutes.post("/register", register)
authRoutes.post("/login", login)

export default authRoutes