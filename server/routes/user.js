import { Router } from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { currentUser } from "../controllers/user.js";

const userRouter = Router();

userRouter.get("/current-user", requireSignIn, currentUser);

export default userRouter;
