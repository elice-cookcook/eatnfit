"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userService_1 = require("../services/userService");
const exerciseService_1 = require("../services/exerciseService");
const foodService_1 = require("../services/foodService");
const mealService_1 = require("../services/mealService");
const planService_1 = require("../services/planService");
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userCookie = req.cookies['USER_COOKIE'];
        const userData = JSON.parse(userCookie);
        const user = yield userService_1.userService.getUser(userData.userId);
        res.status(200).json({
            message: '유저 정보 조회',
            data: user
        });
    }
    catch (err) {
        next(err);
    }
});
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, height, weight, targetWeight } = req.body;
        const newUser = yield userService_1.userService.addUser(name, email, password, Number(height), Number(weight), Number(targetWeight));
        res.status(201).json({
            message: "유저 정보를 추가했습니다",
            data: newUser
        });
    }
    catch (err) {
        next(err);
    }
});
const setUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, height, weight, targetWeight, } = req.body;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const newUser = yield userService_1.userService.setUser(user_id, name, height, weight, targetWeight);
        res.status(200).json({
            message: "유저 정보를 변경했습니다",
            data: newUser
        });
    }
    catch (err) {
        next(err);
    }
});
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userId = yield userService_1.userService.userLogin(email, `${password}`);
        res.cookie('USER_COOKIE', JSON.stringify({
            userId: userId
        }));
        res.status(200).json({
            message: '로그인 되었습니다'
        });
    }
    catch (err) {
        next(err);
    }
});
const loginCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.cookies['USER_COOKIE'];
        if (!user) {
            res.status(400).json({
                message: "로그인이 필요합니다",
            });
        }
        const userData = JSON.parse(user);
        const check = yield userService_1.userService.loginCheck(userData.userId);
        if (!check) {
            res.status(400).json({
                message: "잘못된 요청입니다",
            });
        }
    }
    catch (err) {
        next(err);
    }
});
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentId = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const { id } = req.params;
        if (currentId !== id) {
            throw new Error('권한이 없습니다');
        }
        yield exerciseService_1.exerciseService.deleteExerciseByUserId(currentId);
        yield foodService_1.foodService.deleteFoodByUserId(currentId);
        yield mealService_1.mealService.deleteMealByUserId(currentId);
        yield planService_1.planService.deletePlanByUserId(currentId);
        yield userService_1.userService.deleteUser(currentId);
        res.status(200).json({
            message: "회원탈퇴가 완료되었습니다"
        });
    }
    catch (err) {
        next(err);
    }
});
const userController = {
    getUser,
    setUser,
    addUser,
    userLogin,
    loginCheck,
    deleteUser
};
exports.userController = userController;
