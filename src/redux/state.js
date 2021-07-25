import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, postMessage: "Hello World!", postLikes: 4 },
        { id: 2, postMessage: "Good day!", postLikes: 6 },
        { id: 3, postMessage: "Bad day!", postLikes: 0 },
        { id: 4, postMessage: "React", postLikes: 19 },
        { id: 5, postMessage: "123", postLikes: 119 },
        { id: 6, postMessage: "Cool", postLikes: 5 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        { userId: "111", userName: "Ivan" },
        { userId: "abc", userName: "Bob" },
        { userId: "646464", userName: "Misha228" },
        { userId: "Jonh3333", userName: "Jonh3333" },
        { userId: "444", userName: "Gleb" },
        { userId: "kurt333", userName: "kurt" },
      ],
      messagesData: [
        {
          id: "1",
          messageText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: "2",
          messageText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, esse iure molestias laudantium corporis natus neque accusamus quod adipisci eius magni consectetur aliquid minima aspernatur, nihil maiores quaerat? Distinctio, ut?",
        },
        {
          id: "3",
          messageText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, esse iure molestias laudantium corporis?",
        },
        { id: "4", messageText: "Lorem ipsum dolor." },
        {
          id: "5",
          messageText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, esse iure molestias laudantium corporis natus neque accusamus quod adipisci eius magni consectetur aliquid minima aspernatur, nihil maiores quaerat? Distinctio, ut?",
        },
        { id: "6", messageText: "Lorem ipsum dolo" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
