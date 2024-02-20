"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exerciseController_1 = require("../controllers/exerciseController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// 경로 : /api/v1/exercises
router.get('/activity', exerciseController_1.exerciseController.getActivity);
router.get('/activity/:name', exerciseController_1.exerciseController.getActivityByName);
router.post('/activity', exerciseController_1.exerciseController.addActivity);
router.delete('/', exerciseController_1.exerciseController.deleteExercise);
router.get('/:date', exerciseController_1.exerciseController.getExercise);
router.patch('/:date', exerciseController_1.exerciseController.setExercise);
router.post('/:date', exerciseController_1.exerciseController.addExercise);
router.get('/kcal/:date', exerciseController_1.exerciseController.getKcal);
exports.default = router;
