const UPPDATE_NEW_MESSAGE_TEXT = "UPPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState =  {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    case SEND_MESSAGE:
      let text = state.newMessageText;
      state.newMessageText = "";
      state.messagesData.push({
        id: "7",
        messageText: text,
      });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const uppdateNewMessageTextCreator = (text) => {
  return { type: UPPDATE_NEW_MESSAGE_TEXT, text: text };
};

export default dialogsReducer;
