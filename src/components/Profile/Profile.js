import React from "react";
import classes from "./Profile.module.css";
import Post from "./Posts/Post";
import UserPhoto from "../../assets/images/user_icon.png";
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {
  let postsItems = props.profilePage.postsData.map((item) => (
    <Post
      id={item.id}
      key={item.id}
      message={item.postMessage}
      likes={item.postLikes}
    />
  ));

  let newPostText = props.profilePage.newPostText;

  let onAddPost = () => {
    props.addPost();
  };

  let addNewPostText = (event) => {
    let text = event.target.value;
    props.updateNewPostText(text);
  };

  if (!props.userProfile) {
    return <Preloader />;
  } else {
    return (
      <section>
        <h2>Profile</h2>
        <div>
            <img
              className={classes.user_img}
              src={props.userProfile.photos.large != null ? props.userProfile.photos.large : UserPhoto}
              alt="userPhoto"
            />
            <p>{props.userProfile.fullName}</p>
            <p>{props.userProfile.aboutMe}</p>
        </div>

        <input
          onChange={addNewPostText}
          className={classes.input_new_post}
          value={newPostText}
          placeholder="new post"
          type="text"
        />
        <button onClick={onAddPost}>Add post</button>
        {postsItems}
      </section>
    );
  }
};

export default Profile;
