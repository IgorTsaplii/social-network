import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: { userId, email, login, isAuth },
  };
};

export const getAuthData = () => async (dispatch) => {
  const response = await authAPI.getAuthData();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(getAuthData());
  } else {
    dispatch(
      stopSubmit("signIn", {
        _error:
          response.data.messages.length > 0
            ? response.data.messages
            : "Some error",
      })
    );
  }
};

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
