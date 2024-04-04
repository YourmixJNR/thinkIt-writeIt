// import express from "express"
import { Router } from "express"

const authRoutes = Router()

// controllers
import { register, login, logout, currentUser } from "../controllers/auth.js"
import { requireSignIn } from "../middlewares/authMiddleware.js"

authRoutes.post("/register", register)
authRoutes.post("/login", login)
authRoutes.get("/logout", logout)
authRoutes.get("/current-user", requireSignIn, currentUser)

export default authRoutes