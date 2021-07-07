/**
 * Custom Error Handling Class
 * @class
 * @returns instance of ErrorHandle - custom error object for more better error handling in API route controllers
 */
class ErrorHandler extends Error {
  statusCode: number

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    Error.captureStackTrace(this, this.constructor)
  }
}

export default ErrorHandler
