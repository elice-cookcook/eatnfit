import { foodController } from '../controllers/foodController';
import { Router } from 'express';
const router: Router = Router();

// 경로 : /api/v1/foods
router.post('/', foodController.addFood);
// 전체 검색 : /api/v1/foods/
// 특정 이름으로 검색 : /api/v1/foods/?name=사과
router.get('/', foodController.getFood);

export default router;