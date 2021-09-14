import React from "react";
import Post from "./Posts/Post";
import Preloader from "../common/Preloader/Preloader";
import { ReduxAddPostForm } from "./ProfileForm/AddPostForm";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  let postsItems = props.postsData.map((item) => (
    <Post
      id={item.id}
      key={item.id}
      message={item.postMessage}
      likes={item.postLikes}
    />
  ));

  const onSubmit = (formData) => {
    if (formData.newPostText) {
      props.addPost(formData.newPostText);
    }
  };

  if (!props.userProfile) {
    return <Preloader />;
  } else {
    return (
      <section>
        <h2>Profile</h2>
        <ProfileInfo
          userProfile={props.userProfile}
          isOwner={props.isOwner}
          savePhoto={props.savePhoto}
          status={props.status}
          updateProfileStatus={props.updateProfileStatus}
          saveProfile={props.saveProfile}
        />
        <ReduxAddPostForm onSubmit={onSubmit} />
        {postsItems}
      </section>
    );
  }
};

export default Profile;
