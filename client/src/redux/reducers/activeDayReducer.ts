import moment from "moment";
import { SET_ACTIVE_DAY, setActiveDay } from "../actions";

const initialState = {
  activeDay: moment().format("YYYYMMDD"),
};

type activeDayActionType = ReturnType<typeof setActiveDay>;

const activeDayReducer = (
  state = initialState,
  action: activeDayActionType
) => {
  switch (action.type) {
    case SET_ACTIVE_DAY:
      return {
        ...state,
        activeDay: action.payload,
      };
    default:
      return state;
  }
};

export default activeDayReducer;
