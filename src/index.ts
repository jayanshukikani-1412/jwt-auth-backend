import "dotenv/config";
import createApp from "./app.ts";
import ENV_CONFIG from "./config/env.config.ts";
import connectToDatabase from "./db.ts";

// start server function
const startServer = async () => {
    // connect to database
    await connectToDatabase();

    // create app
    const app = createApp();
    // start server
    const PORT = ENV_CONFIG.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} in ${ENV_CONFIG.NODE_ENV} mode`);
    });
}

// start server
startServer();