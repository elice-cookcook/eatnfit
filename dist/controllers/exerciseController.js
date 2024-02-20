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
exports.exerciseController = void 0;
const exerciseService_1 = require("../services/exerciseService");
const getKcal = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.params;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const match = date.match(/(\d{4})(\d{2})(\d{2})/);
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);
        const { dayKcal, dayComsumedKcal } = yield exerciseService_1.exerciseService.getKcal(date, user_id);
        res.status(200).json({
            message: `${year}년 ${month}월 ${day}일 칼로리 조회 결과입니다`,
            data: {
                dayKcal,
                dayComsumedKcal
            }
        });
    }
    catch (err) {
        next(err);
    }
});
const getExercise = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date } = req.params;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const match = date.match(/(\d{4})(\d{2})(\d{2})/);
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);
        const { exerciseList } = yield exerciseService_1.exerciseService.getExercise(date, user_id);
        res.status(200).json({
            message: `${year}년 ${month}월 ${day}일 운동기록 조회 결과입니다`,
            data: exerciseList,
        });
    }
    catch (err) {
        next(err);
    }
});
const addExercise = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, exercise_type, exercise_part, strength, time, kcal } = req.body;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const { date } = req.params;
        if (!date ||
            !name ||
            (!exercise_type && parseInt(exercise_type) !== 0) ||
            (!exercise_part && parseInt(exercise_part) !== 0) ||
            (!strength && parseInt(strength) !== 0) ||
            (!time && Number(time) !== 0) ||
            (!kcal && Number(kcal) !== 0)) {
            throw new Error('누락된 데이터가 있습니다');
        }
        const addedExercise = yield exerciseService_1.exerciseService.addExercise(parseInt(date), user_id, name, parseInt(exercise_type), parseInt(exercise_part), parseInt(strength), parseInt(time), Number(kcal));
        res.status(201).json({
            message: "운동 기록이 추가되었습니다",
            data: addedExercise
        });
    }
    catch (err) {
        next(err);
    }
});
const setExercise = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, exercise_type, exercise_part, strength, time, kcal } = req.body;
        const { id } = req.query;
        const { date } = req.params;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        if (!id ||
            !date ||
            !name ||
            (!exercise_type && parseInt(exercise_type) !== 0) ||
            (!exercise_part && parseInt(exercise_part) !== 0) ||
            (!strength && parseInt(strength) !== 0) ||
            (!time && Number(time) !== 0) ||
            (!kcal && Number(kcal) !== 0)) {
            throw new Error('누락된 데이터가 있습니다');
        }
        const changedExercise = yield exerciseService_1.exerciseService.setExercise(id, parseInt(date), user_id, name, parseInt(exercise_type), parseInt(exercise_part), parseInt(strength), parseInt(time), Number(kcal));
        res.status(201).json({
            message: "운동 기록이 수정되었습니다",
            data: changedExercise
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteExercise = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const deletedExercise = yield exerciseService_1.exerciseService.deleteExercise(id);
        res.status(200).json({
            message: "운동 기록이 삭제되었습니다",
            data: deletedExercise
        });
    }
    catch (err) {
        next(err);
    }
});
const addActivity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, kcal } = req.body;
        const addedActivity = yield exerciseService_1.exerciseService.addActivity(`${name}`, Number(kcal));
        res.status(201).json({
            message: "운동이 추가되었습니다",
            data: addedActivity
        });
    }
    catch (err) {
        next(err);
    }
});
const getActivity = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const activityList = yield exerciseService_1.exerciseService.getActivity();
        res.status(200).json({
            message: "전체 운동 목록 입니다",
            data: activityList
        });
    }
    catch (err) {
        next(err);
    }
});
const getActivityByName = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.params;
        const activityList = yield exerciseService_1.exerciseService.getActivityByName(name);
        res.status(200).json({
            message: `${name} 검색 결과 입니다`,
            data: activityList || []
        });
    }
    catch (err) {
        next(err);
    }
});
const exerciseController = {
    getExercise,
    setExercise,
    addExercise,
    deleteExercise,
    getActivity,
    getActivityByName,
    addActivity,
    getKcal,
};
exports.exerciseController = exerciseController;
