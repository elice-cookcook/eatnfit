import { userController } from '../controllers/userController';
import { Router } from 'express';
const router: Router = Router();

// 경로 : /api/v1/users
router.get('/', userController.getUser);
router.patch('/', userController.setUser);
router.post('/signup', userController.addUser);
router.post('/login', userController.userLogin);
router.delete('/:id', userController.deleteUser);

export default router;