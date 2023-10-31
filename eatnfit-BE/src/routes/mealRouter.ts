import { mealController } from '../controllers/mealController';
import { Router } from 'express';
const router: Router = Router();

// 경로 : /api/v1/meals
router.get('/', mealController.mealTest);
router.get('/:date', mealController.getMeal);

export default router;