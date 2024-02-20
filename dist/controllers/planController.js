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
exports.planController = void 0;
const planService_1 = require("../services/planService");
const planTest = (req, res, next) => {
    res.send('plan');
};
const getPlan = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { date } = req.params;
    const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
    try {
        const planList = yield planService_1.planService.getPlan(parseInt(date), user_id);
        const match = date.match(/(\d{4})(\d{2})(\d{2})/);
        const year = parseInt(match[1]);
        const month = parseInt(match[2]);
        const day = parseInt(match[3]);
        res.status(200).json({
            message: `${year}년 ${month}월 ${day}일 계획 조회 결과입니다`,
            data: planList
        });
    }
    catch (err) {
        next(err);
    }
});
const addPlan = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { date } = req.params;
    const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
    try {
        const { content, isComplete } = req.body;
        if (!content || !isComplete) {
            throw new Error('누락된 데이터가 있습니다');
        }
        const addedPlan = yield planService_1.planService.addPlan(parseInt(date), user_id, content, parseInt(isComplete));
        res.status(201).json({
            message: '계획이 추가되었습니다',
            data: addedPlan
        });
    }
    catch (err) {
        next(err);
    }
});
const setPlan = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const { date } = req.params;
        const user_id = JSON.parse(req.cookies["USER_COOKIE"]).userId;
        const { content, isComplete } = req.body;
        const changedPlan = yield planService_1.planService.setPlan(id, parseInt(date), user_id, content, parseInt(isComplete));
        res.status(200).json({
            message: '계획이 변경되었습니다',
            data: changedPlan
        });
    }
    catch (err) {
        next(err);
    }
});
const deletePlan = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.query;
        const deletedPlan = yield planService_1.planService.deletePlan(id);
        res.status(200).json({
            message: '계획이 삭제되었습니다',
            data: deletedPlan
        });
    }
    catch (err) {
        next(err);
    }
});
const planController = {
    planTest,
    getPlan,
    addPlan,
    setPlan,
    deletePlan,
};
exports.planController = planController;
