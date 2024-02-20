"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer = require("multer");
exports.multerConfig = {
    storage: multer.diskStorage({
        destination: "./Image",
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        },
    }),
};
