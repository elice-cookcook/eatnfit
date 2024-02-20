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
exports.userService = void 0;
const models_1 = require("../models");
const addUser = (name, email, password, height, weight, targetWeight) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const check = yield models_1.User.findOne({ email });
        console.log(check);
        if (check) {
            const err = {
                message: "이미 존재하는 이메일입니다",
                status: 400
            };
            throw err;
        }
        const newUser = yield models_1.User.create({
            name,
            email,
            password,
            height,
            weight,
            target_weight: targetWeight
        });
        return newUser;
    }
    catch (err) {
        throw (err);
    }
});
const setUser = (user_id, name, height, weight, targetWeight) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = user_id;
        const check = yield models_1.User.findById(id);
        if (!check) {
            throw new Error('존재하지 않는 유저ID입니다');
        }
        const newUser = yield models_1.User.findByIdAndUpdate(id, { name, height, weight, target_weight: targetWeight }, { new: true });
        return newUser;
    }
    catch (err) {
        throw Error(err);
    }
});
const userLogin = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findOne({ email });
        if (!user) {
            const err = {
                message: "존재하지 않는 이메일입니다",
                status: 400
            };
            throw err;
        }
        if (user.password !== password) {
            const err = {
                message: "비밀번호가 틀렸습니다",
                status: 400
            };
            throw err;
        }
        else {
            return user._id;
        }
    }
    catch (err) {
        throw (err);
    }
});
const loginCheck = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const check = yield models_1.User.findOne({ _id: userId });
        if (check) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        throw err;
    }
});
const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield models_1.User.findOne({ _id: userId });
        return user;
    }
    catch (err) {
        throw err;
    }
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.User.findByIdAndRemove(userId);
        return;
    }
    catch (err) {
        throw err;
    }
});
const userService = {
    setUser,
    addUser,
    userLogin,
    loginCheck,
    getUser,
    deleteUser
};
exports.userService = userService;
