import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import activeDayReducer from "./activeDayReducer";
import foodReducer from "./FoodReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  activeDay: activeDayReducer,
  food: foodReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
