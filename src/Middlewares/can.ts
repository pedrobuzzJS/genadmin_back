import { Request, Response, NextFunction } from "express";

export const can = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  return next();
};