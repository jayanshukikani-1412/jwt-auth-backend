import type { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || err.statusCode || 500;

    res.status(status).json({
        success: false,
        status,
        message: err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
};