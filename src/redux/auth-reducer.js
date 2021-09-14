import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";
const GET_CAPTCHA = "GET-CAPTCHA";

let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    case GET_CAPTCHA:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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

export const getCaptcha = (captchaUrl) => {
  return {
    type: GET_CAPTCHA,
    captchaUrl,
  };
};

export const getAuthData = () => async (dispatch) => {
  const response = await authAPI.getAuthData();

  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserData(id, login, email, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe, captcha);
  console.log(response)
  if (response.data.resultCode === 0) {
    dispatch(getAuthData());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
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

export const getCaptchaUrl =
  (email, password, rememberMe) => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    dispatch(getCaptcha(response.data.url));
  };

export default authReducer;
