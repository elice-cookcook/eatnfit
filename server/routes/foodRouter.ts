import { foodController } from '../controllers/foodController';
import { Router } from 'express';
const router: Router = Router();

// 경로 : /api/v1/foods
router.get('/', foodController.foodTest);

export default router;