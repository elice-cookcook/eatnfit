import { mealController } from '../controllers/mealController';
import { Router } from 'express';

import upload from '../utils/image-to-url';

const router: Router = Router();

// 경로 : /api/v1/meals
router.get('/', mealController.mealTest);
router.get('/:date', mealController.getMeal);
router.post('/:date', upload.single('image'), mealController.addMeal);

export default router;