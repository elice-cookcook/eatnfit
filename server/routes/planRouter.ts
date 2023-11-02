import { planController } from '../controllers/planController';
import { Router } from 'express';
const router: Router = Router();

// 경로 : /api/v1/plans
router.get('/', planController.planTest);
router.get('/:date', planController.getPlan);
router.post('/:date', planController.addPlan);

export default router;