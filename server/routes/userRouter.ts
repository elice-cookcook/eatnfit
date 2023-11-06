import { userController } from '../controllers/userController';
import { Router } from 'express';
const router: Router = Router();

// 경로 : /api/v1/user
router.get('/', userController.userTest);
router.patch('/', userController.setUser);

export default router;