"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const planController_1 = require("../controllers/planController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// 경로 : /api/v1/plans
router.get('/', planController_1.planController.planTest);
router.get('/:date', planController_1.planController.getPlan);
router.post('/:date', planController_1.planController.addPlan);
router.patch('/:date', planController_1.planController.setPlan);
router.delete('/', planController_1.planController.deletePlan);
exports.default = router;
