export enum ExceptionCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllow = 405,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
}

export enum ExceptionName {
  MyException = "MyException",
  SyntaxError = "SyntaxError",
  TokenExpiredError = "TokenExpiredError",
}
