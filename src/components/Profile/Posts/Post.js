import React from "react";
import classes from "./Post.module.css";

export const Post = (props) => {
  return (
    <div className={classes.post} id={props.id}>
      <p className={classes.post_message}>{props.message}</p>
      <p className={classes.post_likes}>
        Likes: <span>{props.likes}</span>
      </p>
    </div>
  );
};

export default Post;
