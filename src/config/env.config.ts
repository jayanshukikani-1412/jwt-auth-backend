const ENV_CONFIG = {
    PORT: process.env.PORT || 5000,
    MONGODB_URI: process.env.MONGODB_URI || "",
    JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "jwt-access-secret",
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "jwt-refresh-secret",
    JWT_ACCESS_EXPIRY: process.env.JWT_ACCESS_EXPIRY || "15m",
    JWT_REFRESH_EXPIRY: process.env.JWT_REFRESH_EXPIRY || "7d",
    NODE_ENV: process.env.NODE_ENV || "development",
    CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
} as const;

export default ENV_CONFIG;