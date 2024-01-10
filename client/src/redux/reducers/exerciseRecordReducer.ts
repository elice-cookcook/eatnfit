import { SET_EXERCISE_RECORD, setExerciseRecord } from "../actions";

const initialState: {
    exercise_name: string,
    exercise_time: number,
    exercise_type: number,
    exercise_part: number,
    exercise_strength: number,
} = {
    exercise_name: '',
    exercise_time: 0,
    exercise_type: 0,
    exercise_part: 0,
    exercise_strength: 0,
}

type exerciseRecordActionType = ReturnType<typeof setExerciseRecord>;

const exerciseRecordReducer = (state = initialState, action: exerciseRecordActionType) => {
  switch (action.type) {
    case SET_EXERCISE_RECORD:
        return {
        ...state,
        exercise_name: action.payload.exercise_name,
        exercise_time: action.payload.exercise_time,
        exercise_type: action.payload.exercise_type,
        exercise_part: action.payload.exercise_part,
        exercise_strength: action.payload.exercise_strength,
    };
    default:
        return state;
    }
};

export default exerciseRecordReducer;
