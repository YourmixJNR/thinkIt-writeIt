import { Router } from "express";
import { generateToken } from "../config/csrfToken.js";

const csrfRouter = Router();

csrfRouter.get("/csrf-token", (req, res) => {
  const csrfToken = generateToken(req, res);
  res.json({ csrfToken });
});

export default csrfRouter;