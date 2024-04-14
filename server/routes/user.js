import { Router } from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import { currentUser, updateUser } from "../controllers/user.js";

const userRouter = Router();

userRouter.get("/current-user", requireSignIn, currentUser);
userRouter.post("/update-user", requireSignIn, updateUser);

export default userRouter;
