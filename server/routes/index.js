import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", function (req, res) {
  res.status(200).json({
    message: "Welcome to the API",
    data: null,
  });
});

export default indexRouter;
