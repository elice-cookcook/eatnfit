import storage from "../config/S3Config";
import { nanoid } from "nanoid";
import * as multer from "multer";
import * as multerS3 from "multer-s3"


const upload = multer({
    storage: multerS3({
        s3:storage,
        bucket: 'eatnfit',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, `${nanoid()}`);
        }
    })
})

export default upload;
