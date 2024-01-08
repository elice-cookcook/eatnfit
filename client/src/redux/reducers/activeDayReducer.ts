import { SET_ACTIVE_DAY, setActiveDay } from "../actions";
import { format } from "date-fns";

const initialState = {
  activeDay: format(new Date(), "yyyy-MM-dd"),
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
