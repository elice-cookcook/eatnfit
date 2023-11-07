import mongoose, { Schema } from "mongoose";

interface DBActivity {
    name: string;
    kcal: number;
}

const ActivitySchema = new Schema({
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
})

const Activity = mongoose.model<DBActivity>('Activity', ActivitySchema);

export { Activity };