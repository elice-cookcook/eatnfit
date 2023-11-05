import { mealController } from '../controllers/mealController';
import { Router } from 'express';

import * as multer from 'multer';
import { multerConfig } from '../config/multerConfig';
const upload = multer(multerConfig);

const router: Router = Router();

// 경로 : /api/v1/meals
router.get('/', mealController.mealTest);
router.get('/:date', mealController.getMeal);
router.post('/:date', upload.single('image'), mealController.addMeal);

export default router;