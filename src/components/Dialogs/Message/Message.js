import React from 'react'
import classes from '../Dialogs.module.css'

const Message = (props) => {
  return <p className={classes.message} id={props.id}>{props.messageText}</p>
}

export default Message;