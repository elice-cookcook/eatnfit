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
exports.foodService = void 0;
const models_1 = require("../models");
/** food 추가 */
const addFood = (user_id, name, kcal, carbohydrate, protein, fat) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newFood = { user_id, name, kcal, carbohydrate, protein, fat };
        const check = yield models_1.Food.findOne({ name, user_id });
        if (check) {
            const error = {
                message: "이미 존재하는 음식명입니다",
                status: 400
            };
            throw error;
        }
        const addedFood = yield models_1.Food.create(newFood);
        return addedFood;
    }
    catch (err) {
        throw (err);
    }
});
/** food 전체 검색 */
const getFood = (user_id) => __awaiter(void 0, void 0, void 0, function* () {
    const foodList = yield models_1.Food.find({ user_id });
    return foodList;
});
const getFoodByName = (user_id, name) => __awaiter(void 0, void 0, void 0, function* () {
    const foodList = yield models_1.Food.find({ user_id, name });
    return foodList;
});
const deleteFoodByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Food.findOneAndDelete({ user_id: userId });
        return;
    }
    catch (err) {
        throw err;
    }
});
const foodService = {
    addFood,
    getFood,
    getFoodByName,
    deleteFoodByUserId,
};
exports.foodService = foodService;
