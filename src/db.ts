import mongoose from "mongoose";
import ENV_CONFIG from "./config/env.config.ts";

const connectToDatabase = async () => {
    const MONGODB_URI = ENV_CONFIG.MONGODB_URI as string;
    if (!MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined");
    }
    try {
        const conn = await mongoose.connect(ENV_CONFIG.MONGODB_URI as string);

        console.log(`Connected to MongoDB ${conn.connection.host}`);

        mongoose.connection.on("error", (error) => {
            console.log("MongoDB connection error: ", error);
            process.exit(1);
        });
    } catch (error) {
        console.log("MongoDB connection error catch block: ", error);
        process.exit(1);
    }
}

export default connectToDatabase;