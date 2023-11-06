import { Request } from "express";
import * as fs from "fs";
import storage from "../config/S3Config";
import { nanoid } from "nanoid";


const getImageURL = async (req:Request) => {
    try {
        if (!req.file) {
            throw Error('이미지 파일이 존재하지 않습니다');
        }
        const fileData: Express.Multer.File = req.file;
        const fileContent = fs.readFileSync(fileData.path);
        const result = await storage.upload({
            Bucket: "eatnfit",
            Key: `${nanoid()}`,
            ContentType: fileData.mimetype, 
            ACL: 'public-read',
            Body: fileContent,
        }).promise();
        
        return result.Location;
    } catch (err) {
        throw err;
    }
}

export default getImageURL;
