"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_s3_1 = require("@aws-sdk/client-s3");
const config_1 = require("../config");
const storage = new client_s3_1.S3Client({
    credentials: {
        accessKeyId: config_1.default.ACCESS,
        secretAccessKey: config_1.default.SECRET,
    },
    region: config_1.default.REGION
});
exports.default = storage;
