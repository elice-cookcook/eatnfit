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
exports.mealController = void 0;
const mealService_1 = require("../services/mealService");
const mealTest = (req, res, next) => {
    res.send('meal');
};
const getMeal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.params;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const match = date.match(/(\d{4})(\d{2})(\d{2})/);
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);
        const { mealList } = yield mealService_1.mealService.getMeal(date, user_id);
        res.status(200).json({
            message: `${year}년 ${month}월 ${day}일 식단 조회 결과입니다`,
            data: mealList
        });
    }
    catch (err) {
        next(err);
    }
});
const addMeal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.params;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const { time, meal_type, total_kcal, total_carbohydrate, total_protein, total_fat, image_url, items } = req.body;
        const addedMeal = yield mealService_1.mealService.addMeal(parseInt(date), user_id, parseInt(time), parseInt(meal_type), image_url, Number(total_kcal), Number(total_carbohydrate), Number(total_protein), Number(total_fat), items);
        res.status(201).json({
            message: '식단이 추가되었습니다',
            data: addedMeal
        });
    }
    catch (err) {
        next(err);
    }
});
const setMeal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.params;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const { id } = req.query;
        const { time, meal_type, total_kcal, total_carbohydrate, total_protein, total_fat, image_url, items } = req.body;
        const changedMeal = yield mealService_1.mealService.setMeal(id, parseInt(date), user_id, parseInt(time), parseInt(meal_type), image_url, Number(total_kcal), Number(total_carbohydrate), Number(total_protein), Number(total_fat), items);
        res.status(200).json({
            message: '식단이 변경되었습니다',
            data: changedMeal
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteMeal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const deletedMeal = yield mealService_1.mealService.deleteMeal(id);
        res.status(200).json({
            message: '식단이 삭제되었습니다',
            data: deletedMeal
        });
    }
    catch (err) {
        next(err);
    }
});
const mealController = {
    mealTest,
    getMeal,
    addMeal,
    setMeal,
    deleteMeal,
};
exports.mealController = mealController;
