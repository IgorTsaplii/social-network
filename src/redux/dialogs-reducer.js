const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogsData: [
    { id: "111", userName: "Ivan" },
    { id: "646464", userName: "Misha228" },
    { id: "Jabc", userName: "Bob" },
    { id: "onh3333", userName: "Jonh3333" },
    { id: "444", userName: "Gleb" },
    { id: "kurt333", userName: "kurt" },
  ],
  messagesData: [
    {
      id: "1",
      messageText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let text = action.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: "7", messageText: text }],
      };

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageText) => {
  return {
    type: SEND_MESSAGE,
    newMessageText,
  };
};

export default dialogsReducer;
