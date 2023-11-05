import { exerciseController } from '../controllers/exerciseController';
import { Router } from 'express';
const router: Router = Router();

// 경로 : /api/v1/exercises
router.get('/', exerciseController.exerciseTest);
router.get('/:date', exerciseController.getExercise);
router.post('/:date', exerciseController.addExercise);


export default router;