"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mealController_1 = require("../controllers/mealController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// 경로 : /api/v1/meals
router.get('/', mealController_1.mealController.mealTest);
router.get('/:date', mealController_1.mealController.getMeal);
router.post('/:date', mealController_1.mealController.addMeal);
router.patch('/:date', mealController_1.mealController.setMeal);
router.delete('/', mealController_1.mealController.deleteMeal);
exports.default = router;
