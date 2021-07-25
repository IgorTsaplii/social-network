import React from "react";
import {
  sendMessageCreator,
  uppdateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (text) => {
    props.store.dispatch(uppdateNewMessageTextCreator(text));
  };

  return (
    <Dialogs
      uppdateNewMessageText={onNewMessageChange}
      sendMessage={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
