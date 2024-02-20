"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meal = void 0;
const mongoose_1 = require("mongoose");
const MealSchema = new mongoose_1.Schema({
    /** 날짜 */
    date: {
        type: Number,
        required: true
    },
    /** 유저 id */
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user'
    },
    /** 식사한 시각 */
    time: {
        type: Number,
        required: true
    },
    /**
    * 식단 분류. [ 0: 아침, 1: 아점, 2: 점심, 3: 간식, 4: 점저, 5: 저녁, 6: 야식 ]
    */
    meal_type: {
        type: Number,
        default: 0
    },
    /** 이미지 url */
    image_url: {
        type: String
    },
    /** 총 칼로리, 탄단지 */
    total_kcal: {
        type: Number
    },
    total_carbohydrate: {
        type: Number
    },
    total_protein: {
        type: Number
    },
    total_fat: {
        type: Number
    },
    /** 구성 음식 목록 */
    items: [
        {
            item: {
                type: String,
            },
            count: {
                type: Number,
                default: 1
            },
            kcal: {
                type: Number
            }
        }
    ]
});
const Meal = mongoose_1.default.model('Meal', MealSchema);
exports.Meal = Meal;
