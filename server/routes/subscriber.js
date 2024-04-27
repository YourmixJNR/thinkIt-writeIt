import { Router } from "express";
import { subscribe, unSubscribe, verifyMail } from "../controllers/subscriber.js";

const subscriberRouter = Router()

subscriberRouter.post("/subscribe", subscribe)
subscriberRouter.get("/verify", verifyMail)
subscriberRouter.get("/unsubscribe", unSubscribe)

export default subscriberRouter