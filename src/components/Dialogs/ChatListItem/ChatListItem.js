import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ChatListItem.module.css";

function ChatListItem(props) {
  return (
    <p className={classes.chat_list_item}>
      <NavLink to={'/dialogs/'+props.id} activeClassName={classes.active}>{props.userName}</NavLink>
    </p>
  );
}

export default ChatListItem;
