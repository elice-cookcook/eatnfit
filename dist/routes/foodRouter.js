"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foodController_1 = require("../controllers/foodController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// 경로 : /api/v1/foods
router.post('/', foodController_1.foodController.addFood);
// 전체 검색 : /api/v1/foods/
// 특정 이름으로 검색 : /api/v1/foods/?name=사과
router.get('/', foodController_1.foodController.getFood);
exports.default = router;
