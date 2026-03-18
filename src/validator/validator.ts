import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import type { ApiResponse } from "../types/index.ts";
import createHttpError from "http-errors";

export const validate = (req: Request, res: Response<ApiResponse>, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(createHttpError(400, "Validation failed", { errors: errors.array().map((e) => ({ field: e.type, message: e.msg })) }))
  }
  next();
};
