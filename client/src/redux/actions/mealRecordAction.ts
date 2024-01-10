export const SET_MEAL_RECORD = "SET_MEAL_RECORD";

export const setMealRecord = (
    mealRecord: {
        image_url: string,
        meal_type: number,
    }) => {
  return {
    type: SET_MEAL_RECORD,
    payload: mealRecord,
  };
};
