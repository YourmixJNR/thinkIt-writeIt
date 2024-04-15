import { Router } from "express";
import userProfile from "../controllers/profile.js";

const profileRouter = Router()

profileRouter.get("/profile", userProfile)

export default profileRouter