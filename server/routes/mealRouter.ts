import { mealController } from '../controllers/mealController';
import { Router } from 'express';

const router: Router = Router();

// 경로 : /api/v1/meals
router.get('/', mealController.mealTest);
router.get('/:date', mealController.getMeal);
router.post('/:date', mealController.addMeal);
router.patch('/:date', mealController.setMeal);
router.delete('/', mealController.deleteMeal);

export default router;