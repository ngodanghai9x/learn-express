import express, { NextFunction, Request, Response } from "express";
import { ExceptionCode } from "src/common/constants";
import { MyException } from "src/common/exceptions";

export const requireJwtAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // validate the token
  const token = req.headers["x-access-token"];
  if (!token) {
    return res
      .status(ExceptionCode.Unauthorized)
      .json({ error: "Unauthorized" });
  }

  // check if the token is valid
  //   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  //     if (err) {
  //       return res.status(401).json({ error: "Unauthorized" });
  //     }
  //     req["user"] = decoded;
  //   });
  next();
};
const { APP_ENV } = process.env;

export const handleException = (
  exception: MyException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (exception?.name !== "MyException") {
    console.log("Error Handling Middleware called");
    console.log(`Path <${APP_ENV}>: `, req.path);
    console.error(`==> `, exception);
  }

  if (typeof exception?.code !== "number") {
    exception.code = ExceptionCode.InternalServerError;
  }

  if (APP_ENV === "dev") {
    return res.status(exception.code).json({
      message: exception.message || exception.sqlMessage,
    });
  }

  if (exception?.name === "MyException") {
    return res.status(exception.code).json({
      message: exception.message,
    });
  }

  return res
    .status(ExceptionCode.InternalServerError)
    .json({ message: "InternalServerError" });

  // next();
};
