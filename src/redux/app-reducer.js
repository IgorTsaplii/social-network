import { getAuthData } from "./auth-reducer";

const SET_INITIALIZED = "SET-INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccss = () => {
  return { type: SET_INITIALIZED };
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthData()) 
    
    promise.then(() => {dispatch(initializedSuccss())})
  };
};


export default appReducer;
