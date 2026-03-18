import express, { type Request, type Response } from 'express';
import cors from 'cors';
import ENV_CONFIG from './config/env.config.ts';
import authRouter from './router/auth.router.ts';
import { notFound } from './middleware/not-found.ts';
import { errorHandler } from './middleware/error-handler.ts';

// create app function
const createApp = () => {
    // create express app
    const app = express();

    // use json middleware
    app.use(express.json());

    // use cors middleware
    app.use(cors({ origin: ENV_CONFIG.CORS_ORIGIN || "*" }));

    app.get("/health", (req: Request, res: Response) => {
        res.status(200).json({ success: true, message: "Server is running" });
    });

    // use auth router
    app.use("/api/auth", authRouter);

    app.use(notFound)
    app.use(errorHandler)

    // return app
    return app;
}

export default createApp;