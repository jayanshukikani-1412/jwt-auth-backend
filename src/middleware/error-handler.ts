import type { Request, Response } from "express";

export const errorHandler = (err: Error, req: Request, res: Response) => {

    res.status(500).json({ success: false, message: "Internal server error" })
}