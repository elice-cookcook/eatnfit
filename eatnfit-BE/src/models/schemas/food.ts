import mongoose, { Schema } from "mongoose";

interface DBFood {
    name: string;
    kcal: number;
    carbohydrate: number;
    protein: number;
    fat: number;
}

const FoodSchema = new Schema({
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
})

const Food = mongoose.model<DBFood>('Food', FoodSchema);

export { Food };