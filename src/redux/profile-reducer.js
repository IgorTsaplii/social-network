const ADD_POST = "ADD-POST";
const UPPDATE_NEW_POST_TEXT = "UPPDATE-NEW-POST-TEXT";

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
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 7,
        postMessage: state.newPostText,
        postLikes: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default: 
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const uppdateNewPostTextActionCreator = (text) => {
  return { type: UPPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
