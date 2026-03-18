import type { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import type { ApiResponse } from "../types/index.ts";

export const validate = (req: Request, res: Response<ApiResponse>, next: NextFunction): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().map((e) => ({ field: e.type, message: e.msg })),
      });
      return;
    }
    next();
  };
  