export const SET_EXERCISE_RECORD = "SET_EXERCISE_RECORD";

export const setExerciseRecord = (
    exerciseRecord: {
        exercise_name: string,
        exercise_time: number,
        exercise_type: number,
        exercise_part: number,
        exercise_strength: number,
    }) => {
  return {
    type: SET_EXERCISE_RECORD,
    payload: exerciseRecord,
  };
};
