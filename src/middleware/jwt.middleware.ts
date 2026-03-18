import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { IAuthRequest, IJWTPayload } from "../types/index.ts";
import createHttpError from "http-errors";
import ENV_CONFIG from "../config/env.config.ts";

export const verifyJWTToken = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const reqToken = req.headers.authorization;
    if (!reqToken || !reqToken.startsWith("Bearer ")) {
        return next(createHttpError(401, "Unauthorized, Token is required"))
    }
    const token = reqToken.split(" ")[1];
    const decoded = jwt.verify(token as string, ENV_CONFIG.JWT_ACCESS_SECRET as string);
    req.user = decoded as IJWTPayload;
    next();
}