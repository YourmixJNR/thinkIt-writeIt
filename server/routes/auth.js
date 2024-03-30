// import express from "express"
import { Router } from "express"

const authRoutes = Router()

// controllers
import { register, login, logout } from "../controllers/auth.js"

authRoutes.post("/register", register)
authRoutes.post("/login", login)
authRoutes.get("/logout", logout)

export default authRoutes