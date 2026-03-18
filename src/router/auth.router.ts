import express from "express";
import { loginExpressValidator, signupExpressValidator } from "../validator/auth.validator.ts";
import { validate } from "../validator/validator.ts";
import { loginHandler, signUpHandler } from "../controller/auth.controller.ts";

const authRouter = express.Router();

authRouter.post("/signup", signupExpressValidator, validate, signUpHandler);
authRouter.post("/login", loginExpressValidator, validate, loginHandler);

export default authRouter;