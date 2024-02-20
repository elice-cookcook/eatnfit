"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const mongoose_1 = require("mongoose");
const ActivitySchema = new mongoose_1.Schema({
    /** 음식 이름 */
    name: {
        type: String,
        required: true,
        unique: true
    },
    /** 칼로리 */
    kcal: {
        type: Number,
        required: true
    }
});
const Activity = mongoose_1.default.model('Activity', ActivitySchema);
exports.Activity = Activity;
