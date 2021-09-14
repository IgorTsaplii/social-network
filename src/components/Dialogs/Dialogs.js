import React from "react";
import classes from "./Dialogs.module.css";
import ChatListItem from "./ChatListItem/ChatListItem";
import Message from "./Message/Message";
import { ReduxAddMessageForm } from "./AddMassageForm/AddMessageForm";

const Dialogs = (props) => {
  let dialogsItems = props.dialogsPage.dialogsData.map((item) => (
    <ChatListItem userName={item.userName} key={item.id} id={item.id} />
  ));

  let messageItems = props.dialogsPage.messagesData.map((item) => (
    <Message messageText={item.messageText} key={item.id} id={item.id} />
  ));

  const addNewMessage = (formData) => {
    if (formData.newMassageText) {
      props.sendMessage(formData.newMassageText);
    }
  };

  return (
    <section>
      <h2>Dialogs</h2>
      <div className={classes.dialogs}>
        <div className={classes.chat_list}>{dialogsItems}</div>
        <div className={classes.chat_history}>
          {messageItems}
          <ReduxAddMessageForm onSubmit={addNewMessage} />
        </div>
      </div>
    </section>
  );
};

export default Dialogs;