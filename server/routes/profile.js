import { Router } from "express";
import userProfile from "../controllers/profile.js";

const profileRouter = Router()

profileRouter.get('/:username', userProfile)

export default profileRouter