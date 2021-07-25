import React from "react";
import Profile from "./Profile";
import {
  addPostActionCreator,
  uppdateNewPostTextActionCreator,
} from "../../redux/profile-reducer";

const ProfileContainer = (props) => {

  let state = props.store.getState()


  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let addNewPostText = (text) => {
    props.store.dispatch(uppdateNewPostTextActionCreator(text));
  };

  return <Profile updateNewPostText={addNewPostText} addPost={addPost}  postsData={state.profilePage.postsData}
    newPostText={state.profilePage.newPostText}/>;
};

export default ProfileContainer;
