import { Request } from "express";
import * as multer from "multer";

type FileNameCallback = (error: Error | null, filename: string) => void;

export const multerConfig = {
  storage: multer.diskStorage({
    destination: "./Image",
    filename: function (
      req: Request,
      file: Express.Multer.File,
      cb: FileNameCallback
    ) {
      cb(null, file.originalname);
    },
  }),
};
