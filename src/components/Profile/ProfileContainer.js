import Profile from "./Profile";
import {
  addPostActionCreator,
  uppdateNewPostTextActionCreator,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    addNewPostText: (text) => {
      dispatch(uppdateNewPostTextActionCreator(text));
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
