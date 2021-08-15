import React from "react";
import classes from "./Dialogs.module.css";
import ChatListItem from "./ChatListItem/ChatListItem";
import Message from "./Message/Message";
import { Redirect } from "react-router";

const Dialogs = (props) => {
  let dialogsItems = props.dialogsPage.dialogsData.map((item) => (
    <ChatListItem userName={item.userName} key={item.id} id={item.id} />
  ));

  let messageItems = props.dialogsPage.messagesData.map((item) => (
    <Message messageText={item.messageText} key={item.id} id={item.id} />
  ));

  let newMessageText = props.dialogsPage.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (event) => {
    let text = event.target.value;
    props.uppdateNewMessageText(text);
  };

  if (!props.isAuth) return <Redirect to={"/sign-in"}/>
    return (
      <section>
        <h2>Dialogs</h2>
        <div className={classes.dialogs}>
          <div className={classes.chat_list}>{dialogsItems}</div>
          <div className={classes.chat_history}>
            {messageItems}
            <div className={classes.add_message_block}>
              <input
                onChange={onNewMessageChange}
                type="text"
                placeholder="new message"
                value={newMessageText}
              />
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Dialogs;
