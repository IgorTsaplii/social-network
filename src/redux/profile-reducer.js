import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS"; 

let initialState = {
  postsData: [
    { id: "1", postMessage: "Hello World!", postLikes: 4 },
    { id: "2", postMessage: "Good day!", postLikes: 6 },
    { id: "3", postMessage: "Bad day!", postLikes: 0 },
    { id: "4", postMessage: "React", postLikes: 19 },
    { id: "5", postMessage: "123", postLikes: 119 },
    { id: "6", postMessage: "Cool", postLikes: 5 },
  ],
  userProfile: null,
  status: "",
  profilePhoto: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.postsData.length + 1 + "",
        postMessage: action.newPostText,
        postLikes: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        userProfile: { ...state.userProfile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPost = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const setUserProfile = (userProfile) => {
  return { type: SET_USER_PROFILE, userProfile };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
}); 

export const getProfileData = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileData(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getProfileStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateProfileStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateProfileStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export const savePhoto = (photo) => {
  return (dispatch) => {
    profileAPI.savePhoto(photo).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
    });
  };
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
      dispatch(getProfileData(userId));
  } else {
      dispatch(stopSubmit("profileData", {_error: response.data.messages.length > 0
        ? response.data.messages[0]
        : "Some error",}));
      return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer;
