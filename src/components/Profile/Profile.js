import React from "react";
import classes from "./Profile.module.css";
import Post from "./Posts/Post";

const Profile = (props) => {
  let postsItems = props.postsData.map((item) => (
    <Post id={item.postId} message={item.postMessage} likes={item.postLikes} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
  };

  let addNewPostText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <section>
      <h2>Profile</h2>
      <img
        className={classes.user_img}
        src="./user_photo.png"
        alt="User_Photo"
      />
      <input
        onChange={addNewPostText}
        ref={newPostElement}
        className={classes.input_new_post}
        value={props.newPostText}
        placeholder="new post"
        type="text"
      />
      <button onClick={onAddPost}>Add post</button>
      {postsItems}
    </section>
  );
};

export default Profile;
