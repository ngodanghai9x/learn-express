import express, { NextFunction, Request, Response } from "express";

const authRouter = express.Router();

authRouter.get("/login", (req: Request, res: Response, next: NextFunction) => {
  req = req;
  next;

  res.json({
    status: "success",
  });
});

export default authRouter;
