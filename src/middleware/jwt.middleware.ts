import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { IAuthRequest, IJWTPayload } from "../types/index.ts";

export const verifyJWTToken = async (req: IAuthRequest, res: Response, next: NextFunction) => {
    const reqToken = req.headers.authorization;
    if (!reqToken || !reqToken.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized, Token is required" });
    }
    const token = reqToken.split(" ")[1];
    const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string);
    req.user = decoded as IJWTPayload;
    next();
}