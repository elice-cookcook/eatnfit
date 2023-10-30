import { Schema } from "mongoose";

const UserSchema = new Schema({
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
    }
})

export { UserSchema };