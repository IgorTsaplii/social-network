import React from "react";
import classes from "./Profile.module.css";
import Post from "./Posts/Post";
import UserPhoto from "../../assets/images/user_icon.png";
import Preloader from "../common/Preloader/Preloader";
import { ReduxAddPostForm } from "./ProfileForm/AddPostForm";
import ProfileStatusHooks from "./ProfileStatus/ProfileStatusHooks";

const Profile = (props) => {
  let postsItems = props.profilePage.postsData.map((item) => (
    <Post
      id={item.id}
      key={item.id}
      message={item.postMessage}
      likes={item.postLikes}
    />
  ));

  const onSubmit = (formData) => {
    props.addPost(formData.newPostText);
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
            src={
              props.userProfile.photos.large != null
                ? props.userProfile.photos.large
                : UserPhoto
            }
            alt="userPhoto"
          />
          <p>{props.userProfile.fullName}</p>
          <ProfileStatusHooks
            status={props.status}
            updateProfileStatus={props.updateProfileStatus}
          />
        </div>
        <ReduxAddPostForm onSubmit={onSubmit} />
        {postsItems}
      </section>
    );
  }
};

export default Profile;
