import { body } from "express-validator";

// signup validator 
export const signupExpressValidator = [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
]

// login validator
export const loginExpressValidator = [
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required").isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
]