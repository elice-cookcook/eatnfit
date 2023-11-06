import * as AWS from "aws-sdk";
import config from "../config";

const storage: AWS.S3 = new AWS.S3({
    accessKeyId: config.ACCESS,
    secretAccessKey: config.SECRET,
    region: config.REGION
});

export default storage;
