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
          messageId: "1",
          messageText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          messageId: "2",
          messageText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, esse iure molestias laudantium corporis natus neque accusamus quod adipisci eius magni consectetur aliquid minima aspernatur, nihil maiores quaerat? Distinctio, ut?",
        },
        {
          messageId: "3",
          messageText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, esse iure molestias laudantium corporis?",
        },
        { messageId: "4", messageText: "Lorem ipsum dolor." },
        {
          messageId: "5",
          messageText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, esse iure molestias laudantium corporis natus neque accusamus quod adipisci eius magni consectetur aliquid minima aspernatur, nihil maiores quaerat? Distinctio, ut?",
        },
        { messageId: "6", messageText: "Lorem ipsum dolo" },
      ],
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 7,
        postMessage: this._state.profilePage.newPostText,
        postLikes: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};


export const addPostActionCreator = () => {
  return {
    type: "ADD-POST",
  };
};
export const uppdateNewPostTextActionCreator = (text) => {
  return { type: "UPPDATE-NEW-POST-TEXT", newText: text };
};

window.store = store;

export default store;
