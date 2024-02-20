"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const S3Config_1 = require("../config/S3Config");
const nanoid_1 = require("nanoid");
const multer = require("multer");
const multerS3 = require("multer-s3");
const upload = multer({
    storage: multerS3({
        s3: S3Config_1.default,
        bucket: 'eatnfit',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, `${(0, nanoid_1.nanoid)()}`);
        }
    })
});
exports.default = upload;
