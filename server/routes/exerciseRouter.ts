import { exerciseController } from '../controllers/exerciseController';
import { Router } from 'express';
const router: Router = Router();

// 경로 : /api/v1/exercises
router.get('/activity', exerciseController.getActivity);
router.get('/activity/:name', exerciseController.getActivityByName);
router.post('/activity', exerciseController.addActivity);
router.delete('/', exerciseController.deleteExercise);
router.get('/:date', exerciseController.getExercise);
router.patch('/:date',exerciseController.setExercise);
router.post('/:date', exerciseController.addExercise);
router.get('/kcal/:date', exerciseController.getKcal);


export default router;