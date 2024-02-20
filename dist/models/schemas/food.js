"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = require("mongoose");
const FoodSchema = new mongoose_1.Schema({
    /** 유저 id */
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user'
    },
    /** 음식 이름 */
    name: {
        type: String,
        required: true
    },
    /** 칼로리 */
    kcal: {
        type: Number,
        required: true
    },
    /** 탄수화물 */
    carbohydrate: {
        type: Number,
        default: 0
    },
    /** 단백질 */
    protein: {
        type: Number,
        default: 0
    },
    /** 지방 */
    fat: {
        type: Number,
        default: 0
    }
});
const Food = mongoose_1.default.model('Food', FoodSchema);
exports.Food = Food;
