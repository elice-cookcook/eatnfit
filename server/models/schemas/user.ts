import mongoose, { Schema } from "mongoose";

interface DBUser {
    email: string;
    password: string;
    name: string;
    height: number;
    weight: number;
    target_weight: number;
}

const UserSchema = new Schema<DBUser>({
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

const User = mongoose.model<DBUser>('User', UserSchema);

export { User };