import type { Request } from "express";
import type { Document, Types } from "mongoose";

export interface IUser extends Document {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserRegisterPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUserLoginPayload {
    email: string;
    password: string;
}


export interface IJWTPayload {
    userId: string;
    email: string;
}

export interface IAuthRequest extends Request {
    user?: IJWTPayload;
}

export interface ApiResponse<T = unknown> {
    success: boolean;
    message: string;
    data?: T;
    errors?: Record<string, string>[];
    pagination?: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
        itemsPerPage: number;
    };
}