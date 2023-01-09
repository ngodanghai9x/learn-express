import express, { NextFunction, Request, Response } from "express";
import authRouter from "./auth";

export const register = (app: express.Application) => {
  app.use("/auth", authRouter);

  // define a route handler for the default home page
  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    // render the index template
    res.render("index");
  });
};
