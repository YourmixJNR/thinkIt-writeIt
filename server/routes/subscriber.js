import { Router } from "express";
import { subscribe, verifyMail } from "../controllers/subscriber.js";

const subscriberRouter = Router()

subscriberRouter.post("/subscribe", subscribe)
subscriberRouter.get("/verify", verifyMail)

export default subscriberRouter