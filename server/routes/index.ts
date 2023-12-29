import { Router } from 'express';
import userRouter from "./userRouter";
import planRouter from "./planRouter";
import mealRouter from "./mealRouter";
import foodRouter from "./foodRouter";
import exerciseRouter from "./exerciseRouter";
import imageUploader from "../utils/imageUploader";

const router: Router = Router();

router.use('/api/v1/users', userRouter);
router.use('/api/v1/plans', planRouter);
router.use('/api/v1/meals', mealRouter);
router.use('/api/v1/foods', foodRouter);
router.use('/api/v1/exercises', exerciseRouter);
router.use('/api/v1/images', imageUploader);

export default router;