import Profile from "./Profile";
import {
  addPost,
  updateNewPostText,
  getProfileData,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";
// import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getProfileData(userId); //this.props.authId

    // if(!userId) userId = 2
    // profileAPI.getProfileData(userId)
    //   .then((response) => {
    //     this.props.setUserProfile(response.data);
    //   });
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={"/sign-in"}/>
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
    // isAuth: state.auth.isAuth,
    // authId: state.auth.userId,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: () => {
//       dispatch(addPostAC());
//     },
//     updateNewPostText: (text) => {
//       dispatch(uppdateNewPostTextAC(text));
//     },
//     setUserProfile: (userProfile) => {
//       dispatch(setUserProfileAC(userProfile));
//     },
//   };
// };

let WithURLDataConteinerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  addPost,
  updateNewPostText,
  getProfileData,
})(WithURLDataConteinerComponent);
