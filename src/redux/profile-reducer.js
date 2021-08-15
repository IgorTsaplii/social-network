import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPPDATE_NEW_POST_TEXT = "UPPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
  postsData: [
    { id: 1, postMessage: "Hello World!", postLikes: 4 },
    { id: 2, postMessage: "Good day!", postLikes: 6 },
    { id: 3, postMessage: "Bad day!", postLikes: 0 },
    { id: 4, postMessage: "React", postLikes: 19 },
    { id: 5, postMessage: "123", postLikes: 119 },
    { id: 6, postMessage: "Cool", postLikes: 5 },
  ],
  newPostText: "",
  userProfile: null,
  // authId: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 7,
        postMessage: state.newPostText,
        postLikes: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };

    case UPPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.text,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };

    default:
      return state;
  }
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostText = (text) => {
  return { type: UPPDATE_NEW_POST_TEXT, text: text };
};
export const setUserProfile = (userProfile) => {
  return { type: SET_USER_PROFILE, userProfile };
};

export const getProfileData = (userId) => {
  return (dispatch) => {
    if (!userId) userId = 2; //  authId
    profileAPI.getProfileData(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export default profileReducer;
