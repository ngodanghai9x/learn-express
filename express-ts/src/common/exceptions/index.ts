import { ExceptionCode, ExceptionName } from "../constants";

export class MyException extends Error {
  // private
  _sqlMessage?: string;

  // public
  code: number;

  constructor(error: any, code: number = ExceptionCode.BadRequest) {
    const isMyException = typeof error === "string" && typeof code === "number";
    const message = isMyException ? error : error?.message;

    super(message || "Error");
    this.name = ExceptionName.MyException;
    this.code = isMyException ? code : ExceptionCode.InternalServerError;
  }
}
