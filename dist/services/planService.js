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
exports.planService = void 0;
const models_1 = require("../models");
const getPlan = (date, user_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const planList = yield models_1.Plan.find({ date, user_id });
        return planList;
    }
    catch (err) {
        throw Error(err);
    }
});
const addPlan = (date, user_id, content, isComplete) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPlan = {
            date,
            user_id,
            content,
            isComplete
        };
        const addedPlan = yield models_1.Plan.create(newPlan);
        return addedPlan;
    }
    catch (err) {
        throw err;
    }
});
const setPlan = (id, date, user_id, content, isComplete) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPlan = {
            date,
            user_id,
            content,
            isComplete
        };
        const changedPlan = yield models_1.Plan.findOneAndUpdate({ _id: id }, newPlan, { new: true });
        return changedPlan;
    }
    catch (err) {
        throw err;
    }
});
const deletePlan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedPlan = yield models_1.Plan.findOneAndDelete({ _id: id }, { returnDocument: 'before' });
        return deletedPlan;
    }
    catch (err) {
        throw err;
    }
});
const deletePlanByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Plan.findOneAndDelete({ user_id: userId });
        return;
    }
    catch (err) {
        throw err;
    }
});
const planService = {
    getPlan,
    addPlan,
    setPlan,
    deletePlan,
    deletePlanByUserId,
};
exports.planService = planService;
