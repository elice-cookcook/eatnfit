"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("Couldn't find .env file");
}
exports.default = {
    // 포트번호
    PORT: parseInt(process.env.PORT, 10),
    // mongoDB uri
    mongoURI: process.env.MONGODB_URI,
    // AWS S3 ACCESS KEY
    ACCESS: process.env.ACCESS_KEY,
    // SECRET KEY
    SECRET: process.env.SECRET_KEY,
    // REGION
    REGION: process.env.REGION
};
