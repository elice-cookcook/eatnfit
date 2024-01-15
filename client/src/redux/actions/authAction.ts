export const SET_IS_AUTHENTICATED = "SET_IS_AUTHENTICATED";

export const setIsAuthenticated = (isAuthenticated: boolean) => {
  return {
    type: SET_IS_AUTHENTICATED,
    payload: isAuthenticated,
  };
};
