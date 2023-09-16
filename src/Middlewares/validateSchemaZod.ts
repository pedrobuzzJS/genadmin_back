import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

export const schemaValition =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = JSON.parse(req.body?.data);
      schema.parse({
        ...data
      });
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        console.log(error)
      }
      return res.status(400).json({ message: "internal server error" });
    }
  };