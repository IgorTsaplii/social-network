import React from 'react'
import classes from './Message.module.css'

const Message = (props) => {
  return <p className={classes.message} id={props.id}>{props.messageText}</p>
}

export default Message;