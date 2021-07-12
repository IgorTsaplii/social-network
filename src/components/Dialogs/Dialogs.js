import React from "react";
import classes from "./Dialogs.module.css";
import ChatListItem from "./ChatListItem/ChatListItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsItems = props.dialogsData.map((item) => (
    <ChatListItem userName={item.userName} userId={item.userId} />
  ));

  let messageItems = props.messagesData.map((item) => (
    <Message messageText={item.messageText} messageId={item.messageId} />
  ));

  let newMessage = React.createRef();

  let addNewMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <section>
      <h2>Dialogs</h2>
      <div className={classes.dialogs}>
        <div className={classes.chat_list}>{dialogsItems}</div>
        <div className={classes.chat_history}>
          {messageItems}
          <div className={classes.add_message_block}>
            <input ref={newMessage} type="text" placeholder="new message" />
            <button onClick={addNewMessage}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
