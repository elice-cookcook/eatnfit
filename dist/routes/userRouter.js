"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// 경로 : /api/v1/users
router.get('/', userController_1.userController.getUser);
router.patch('/', userController_1.userController.setUser);
router.post('/signup', userController_1.userController.addUser);
router.post('/login', userController_1.userController.userLogin);
router.delete('/:id', userController_1.userController.deleteUser);
exports.default = router;
