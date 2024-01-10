import { SET_MEAL_RECORD, setMealRecord } from "../actions";

const initialState: {
    image_url: string,
    meal_type: number,
} = {
    image_url: '',
    meal_type: 0,
}

type mealRecordActionType = ReturnType<typeof setMealRecord>;

const mealRecordReducer = (state = initialState, action: mealRecordActionType) => {
  switch (action.type) {
    case SET_MEAL_RECORD:
        return {
        ...state,
        image_url: action.payload.image_url,
        meal_type: action.payload.meal_type,
    };
    default:
        return state;
    }
};

export default mealRecordReducer;
