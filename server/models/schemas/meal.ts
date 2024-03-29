import mongoose, { Schema } from "mongoose";

interface DBMeal {
    date: number;
    user_id: string;
    time: number;
    meal_type: number;
    image_url: string;
    total_kcal: number;
    total_carbohydrate: number;
    total_protein: number;
    total_fat: number;
    items: Array<Object>;
}

interface Items {
    item: string;
    count: number;
    kcal: number;
}

const MealSchema = new Schema({
    /** 날짜 */
    date: {
        type: Number,
        required: true
    },
    /** 유저 id */
    user_id: {
        type: Schema.Types.ObjectId,
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
        type:String
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
                type:Number
            }
        }
    ]
});

const Meal = mongoose.model<DBMeal>('Meal', MealSchema);

export { Meal };