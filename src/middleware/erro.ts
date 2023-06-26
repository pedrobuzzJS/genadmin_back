import { Request, Response, NextFunction } from "express";
import { ApiError } from "../helpers/Error";
import { Prisma } from "@prisma/client";

export const errorMiddleware = ( 
  erro: any, 
  request: Request, 
  response: Response, 
  next: NextFunction  
) => {

  // if (erro instanceof Prisma.PrismaClientKnownRequestError) {
  //   // console.log(erro)
  //   return response.status(404).json(erro);
  // };

  if (erro) return response.status(500).json(erro)

  // console.log(erro)

  const statusCode = erro.statusCode ?? 500;
  const message = erro.statusCode ? erro.message : "Internal Serve Error";
  return response.status(statusCode).json({message});
};