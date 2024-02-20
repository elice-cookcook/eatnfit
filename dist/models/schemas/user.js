"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    /** 이메일 */
    email: {
        type: String,
        required: true,
        unique: true
    },
    /** 비밀번호 */
    password: {
        type: String,
        required: true
    },
    /** 이름 */
    name: {
        type: String,
        required: true
    },
    /** 키 */
    height: {
        type: Number
    },
    /** 몸무게 */
    weight: {
        type: Number
    },
    /** 목표 몸무게 */
    target_weight: {
        type: Number
    }
});
const User = mongoose_1.default.model('User', UserSchema);
exports.User = User;
