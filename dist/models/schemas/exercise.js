"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
const mongoose_1 = require("mongoose");
const ExerciseSchema = new mongoose_1.Schema({
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
    /** 운동 이름 */
    name: {
        type: String,
        required: true
    },
    /** 운동 종류. [ 0: 유산소, 1: 무산소, 2: 스트레칭 ] */
    exercise_type: {
        type: Number,
        default: 0
    },
    /**
    * 운동 부위. [ 0: 전신, 1: 팔, 2: 복근, 3: 허리, 4: 등, 5: 하체, 6: 어깨, 7: 가슴, 8: 엉덩이, 9: 코어 ]
    */
    exercise_part: {
        type: Number,
        default: 0
    },
    /** 운동 강도. [ 0: 격렬하게, 1: 강하게, 2: 적당하게, 3: 가볍게 ] */
    strength: {
        type: Number,
        default: 0
    },
    /** 운동 시간 */
    time: {
        type: Number,
        required: true
    },
    /** 1분당 소모 칼로리 */
    kcal: {
        type: Number,
        required: true
    }
});
const Exercise = mongoose_1.default.model('Exercise', ExerciseSchema);
exports.Exercise = Exercise;
