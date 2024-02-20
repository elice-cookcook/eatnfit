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
exports.exerciseService = void 0;
const models_1 = require("../models");
const models_2 = require("../models");
const models_3 = require("../models");
const getKcal = (date, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numDate = parseInt(date);
        const exerciseList = yield models_1.Exercise.find({ date: numDate, user_id });
        const mealList = yield models_3.Meal.find({ date: numDate, user_id });
        console.log(exerciseList);
        let dayComsumedKcal = 0;
        let dayKcal = 0;
        for (const exercise of exerciseList) {
            dayComsumedKcal = dayComsumedKcal + (exercise.time * exercise.kcal);
        }
        for (const meal of mealList) {
            dayKcal = dayKcal + meal.total_kcal;
        }
        return {
            dayComsumedKcal,
            dayKcal
        };
    }
    catch (err) {
        throw Error(err);
    }
});
const getExercise = (date, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numDate = parseInt(date);
        const exerciseList = yield models_1.Exercise.find({ date: numDate, user_id });
        return {
            exerciseList
        };
    }
    catch (err) {
        throw Error(err);
    }
});
const setExercise = (id, date, user_id, name, exercise_type, exercise_part, strength, time, kcal) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newExercise = {
            date,
            user_id,
            name,
            exercise_type,
            exercise_part,
            strength,
            time,
            kcal
        };
        const changedExercise = yield models_1.Exercise.findOneAndUpdate({ _id: id }, newExercise, { new: true });
        return changedExercise;
    }
    catch (err) {
        throw err;
    }
});
const addExercise = (date, user_id, name, exercise_type, exercise_part, strength, time, kcal) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newExercise = {
            date,
            user_id,
            name,
            exercise_type,
            exercise_part,
            strength,
            time,
            kcal
        };
        const addedExercise = yield models_1.Exercise.create(newExercise);
        return addedExercise;
    }
    catch (err) {
        throw Error(err);
    }
});
const deleteExercise = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedExercise = yield models_1.Exercise.findOneAndDelete({ _id: id }, { returnDocument: 'before' });
        return deletedExercise;
    }
    catch (err) {
        throw err;
    }
});
const getActivity = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activityList = yield models_2.Activity.find({});
        return activityList;
    }
    catch (err) {
        throw err;
    }
});
const getActivityByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activityList = yield models_2.Activity.find({ name });
        return activityList;
    }
    catch (err) {
        throw err;
    }
});
const addActivity = (name, kcal) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const minKcal = kcal / 30;
        const newActivity = {
            name,
            kcal: minKcal.toFixed(2)
        };
        const check = yield models_2.Activity.findOne({ name });
        if (check) {
            const error = {
                message: "이미 존재하는 운동명입니다",
                status: 400
            };
            throw error;
        }
        const addedActivity = yield models_2.Activity.create(newActivity);
        return addedActivity;
    }
    catch (err) {
        throw err;
    }
});
const deleteExerciseByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Exercise.findOneAndDelete({ user_id: userId });
        return;
    }
    catch (err) {
        throw err;
    }
});
const deleteActivityByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_2.Activity.findOneAndDelete({ user_id: userId });
        return;
    }
    catch (err) {
        throw err;
    }
});
const exerciseService = {
    getExercise,
    addExercise,
    setExercise,
    deleteExercise,
    getActivity,
    getActivityByName,
    addActivity,
    getKcal,
    deleteExerciseByUserId,
};
exports.exerciseService = exerciseService;
