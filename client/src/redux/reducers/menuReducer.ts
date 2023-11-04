import { SET_SELECTED_MENU } from "../actions";

const initialState = {
  selectedMenu: "food",
};

const menuReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_SELECTED_MENU:
      return {
        ...state,
        selectedMenu: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;
