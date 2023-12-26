import { FoodRecord } from "../../types";
import { SET_FOOD, setFood } from "../actions";

const initialState: FoodRecord[] = [];

type foodActionType = ReturnType<typeof setFood>;

const foodReducer = (state = initialState, action: foodActionType) => {
  switch (action.type) {
    case SET_FOOD:
      return action.payload;
    default:
      return state;
  }
};

export default foodReducer;
