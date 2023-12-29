import { SET_SELECTED_MENU, setSelectedMenu } from "../actions";

const initialState = {
  selectedMenu: "food",
};

type menuActionType = ReturnType<typeof setSelectedMenu>;

const menuReducer = (state = initialState, action: menuActionType) => {
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
