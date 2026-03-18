import { User } from "../models/user.model.ts";
import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ENV_CONFIG from "../config/env.config.ts";
import createHttpError from "http-errors";

export const signUpHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        return next(createHttpError(400, "User with this email already exists"))
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ firstName, lastName, email, password: hashedPassword });

    const userData = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }
    return res.status(201).json({ success: true, message: "User created successfully", data: userData });
}

export const loginHandler = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return next(createHttpError(400, "Invalid email or password"))
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return next(createHttpError(400, "Invalid email or password"))
    }

    const expiresIn = ENV_CONFIG.JWT_ACCESS_EXPIRY || "15m";
    const token = jwt.sign(
        { userId: user._id, email: user.email },
        ENV_CONFIG.JWT_ACCESS_SECRET,
        { expiresIn } as jwt.SignOptions
    );

    const userData = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }

    return res.status(200).json({ success: true, message: "Login successful", data: { user: userData, accessToken: token } });

}