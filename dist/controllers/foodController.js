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
exports.foodController = void 0;
const foodService_1 = require("../services/foodService");
const foodTest = (req, res, next) => {
    res.send("food");
};
const addFood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const name = req.body.name;
        const kcal = Number(req.body.kcal);
        const carbohydrate = Number(req.body.carbohydrate);
        const protein = Number(req.body.protein);
        const fat = Number(req.body.fat);
        const addedFood = yield foodService_1.foodService.addFood(user_id, name, kcal, carbohydrate, protein, fat);
        res.status(201).json({
            message: "음식이 추가되었습니다",
            data: addedFood,
        });
    }
    catch (err) {
        next(err);
    }
});
const getFood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const name = req.query.name;
        if (name && name.length > 0) {
            const foodList = yield foodService_1.foodService.getFoodByName(user_id, name);
            res.status(200).json({
                message: `${name} 검색 결과 입니다`,
                data: foodList,
            });
        }
        else {
            const foodList = yield foodService_1.foodService.getFood(user_id);
            res.status(200).json({
                message: "전체 음식 목록입니다",
                data: foodList,
            });
        }
    }
    catch (err) {
        next(err);
    }
});
const foodController = {
    foodTest,
    addFood,
    getFood,
};
exports.foodController = foodController;
