import { Schema } from "mongoose";

const PlanSchema = new Schema({
    /** 날짜 */
    date: {
        type: Number,
        required: true,
    },
    /** 유저 id */
    user_id: {
        type: Schema.Types.ObjectId,
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
})

export { PlanSchema };