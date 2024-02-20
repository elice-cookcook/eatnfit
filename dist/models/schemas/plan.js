"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
const mongoose_1 = require("mongoose");
const PlanSchema = new mongoose_1.Schema({
    /** 날짜 */
    date: {
        type: Number,
        required: true,
    },
    /** 유저 id */
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user'
    },
    /** 내용 */
    content: {
        type: String,
        required: true
    },
    /** 달성 여부 */
    isComplete: {
        type: Number,
        default: 0
    }
});
const Plan = mongoose_1.default.model('Plan', PlanSchema);
exports.Plan = Plan;
