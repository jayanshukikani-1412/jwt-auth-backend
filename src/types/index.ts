import type { Request } from "express";
import type { Document, Types } from "mongoose";
// User interface
export interface IUser extends Document {
    _id: Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

// User register payload interface
export interface IUserRegisterPayload {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

// User login payload interface
export interface IUserLoginPayload {
    email: string;
    password: string;
}


// JWT payload interface
export interface IJWTPayload {
    userId: string;
    email: string;
}

// Auth request interface
export interface IAuthRequest extends Request {
    user?: IJWTPayload;
}

// API response interface
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