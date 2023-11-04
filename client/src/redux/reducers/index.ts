import { combineReducers } from "redux";
import menuReducer from "./menuReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
