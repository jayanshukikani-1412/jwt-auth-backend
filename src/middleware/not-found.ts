import type { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    return next(createHttpError(404, "API Route not found"))
}