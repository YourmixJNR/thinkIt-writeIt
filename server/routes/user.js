import { Router } from "express";
import { requireSignIn } from "../middlewares/authMiddleware";
import { currentUser, updateUser } from "../controllers/auth";

const router = Router()

router.get("/current-user", requireSignIn, currentUser)
router.post("/update-user", requireSignIn, updateUser)