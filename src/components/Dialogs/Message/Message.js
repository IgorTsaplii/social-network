import React from 'react'
import classes from './Message.module.css'

const Message = (props) => {
  return <p className={classes.message} messageId={props.messageId}>{props.messageText}</p>
}

export default Message;