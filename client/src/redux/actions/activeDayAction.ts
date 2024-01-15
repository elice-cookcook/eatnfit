export const SET_ACTIVE_DAY = "SET_ACTIVE_DAY";

export const setActiveDay = (activeDay: Date) => {
  return {
    type: SET_ACTIVE_DAY,
    payload: activeDay,
  };
};
