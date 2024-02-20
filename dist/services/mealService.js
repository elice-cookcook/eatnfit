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
exports.mealService = void 0;
const models_1 = require("../models");
const getMeal = (date, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numDate = parseInt(date);
        const mealList = yield models_1.Meal.find({ date: numDate, user_id });
        return {
            mealList
        };
    }
    catch (err) {
        console.log(err);
        throw Error(err);
    }
});
const addMeal = (date, user_id, time, meal_type, image_url, total_kcal, total_carbohydrate, total_protein, total_fat, items) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMeal = {
            date,
            user_id,
            time,
            meal_type,
            image_url,
            total_kcal,
            total_carbohydrate,
            total_protein,
            total_fat,
            items
        };
        const addedMeal = yield models_1.Meal.create(newMeal);
        return addedMeal;
    }
    catch (err) {
        throw err;
    }
});
const setMeal = (id, date, user_id, time, meal_type, image_url, total_kcal, total_carbohydrate, total_protein, total_fat, items) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newMeal = {
            date,
            user_id,
            time,
            meal_type,
            image_url,
            total_kcal,
            total_carbohydrate,
            total_protein,
            total_fat,
            items
        };
        const changedMeal = yield models_1.Meal.findOneAndUpdate({ _id: id }, newMeal, { new: true });
        return changedMeal;
    }
    catch (err) {
        throw (err);
    }
});
const deleteMeal = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedMeal = yield models_1.Meal.findOneAndDelete({ _id: id }, { returnDocument: 'before' });
        return deletedMeal;
    }
    catch (err) {
        throw (err);
    }
});
const deleteMealByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Meal.findOneAndDelete({ user_id: userId });
        return;
    }
    catch (err) {
        throw err;
    }
});
const mealService = {
    getMeal,
    addMeal,
    setMeal,
    deleteMeal,
    deleteMealByUserId,
};
exports.mealService = mealService;
