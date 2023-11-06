export const SET_SELECTED_MENU = "SET_SELECTED_MENU";

export const setSelectedMenu = (menu: string) => {
  return {
    type: SET_SELECTED_MENU,
    payload: menu,
  };
};
