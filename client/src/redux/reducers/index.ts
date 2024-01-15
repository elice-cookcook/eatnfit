import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import activeDayReducer from "./activeDayReducer";
import foodReducer from "./foodReducer";
import mealRecordReducer from "./mealRecordReducer";
import exerciseRecordReducer from "./exerciseRecordReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  activeDay: activeDayReducer,
  food: foodReducer,
  mealRecord: mealRecordReducer,
  exerciseRecord: exerciseRecordReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
