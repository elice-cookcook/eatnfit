import { S3Client } from "@aws-sdk/client-s3";

import config from "../config";

const storage = new S3Client({
    credentials: {
        accessKeyId: config.ACCESS,
        secretAccessKey: config.SECRET,
    },
    region: config.REGION
});

export default storage;
