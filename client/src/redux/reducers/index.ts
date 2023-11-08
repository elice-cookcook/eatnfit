import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import activeDayReducer from "./activeDayReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  activeDay: activeDayReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
