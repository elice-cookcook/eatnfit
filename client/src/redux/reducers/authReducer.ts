import { SET_IS_AUTHENTICATED, setIsAuthenticated } from "../actions";

const getUserCookie = () => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith("USER_COOKIE" + "=")) {
      return cookie.substring("USER_COOKIE".length + 1);
    }
  }
  return null;
};

const initialState = {
  isAuthenticated: getUserCookie() ? true : false,
};

type authActionType = ReturnType<typeof setIsAuthenticated>;

const authReducer = (state = initialState, action: authActionType) => {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        authReducer: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
