import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/HttpException';

export default class ErrorHandler {
  public static catchError(error: Error, _req: Request, res: Response, next: NextFunction): void {
    const { status, message } = error as HttpException;

    res.status(status || 500).json({ message });

    next();
  }
}
