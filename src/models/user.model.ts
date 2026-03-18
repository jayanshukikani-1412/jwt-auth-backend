import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        min: [3, "First name must be at least 3 characters long"],
        max: [50, "First name must be less than 50 characters long"],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        trim: true,
        min: [3, "Last name must be at least 3 characters long"],
        max: [50, "Last name must be less than 50 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        min: [8, "Password must be at least 8 characters long"],
        max: [50, "Password must be less than 50 characters long"],
    },
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
