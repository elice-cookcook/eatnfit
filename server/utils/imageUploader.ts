import { Router, Request, Response, NextFunction } from "express";
import upload from '../utils/image-to-url';

const router: Router = Router();

router.post('/', upload.single('image'), async (req:Request, res:Response, next:NextFunction) => {
    try{
        const image_url = (req.file as Express.MulterS3.File).location;

        res.status(200).json({
            message:'이미지 url 변환',
            data: image_url
        });
    } catch(err) {
        next(err);
    }
})


export default router;