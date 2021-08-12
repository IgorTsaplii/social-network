import Profile from "./Profile";
import {
  addPostAC,
  uppdateNewPostTextAC,
  setUserProfileAC,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import React from "react";
import * as axios from "axios";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userId

    if(!userID) userID = 2
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    userProfile: state.profilePage.userProfile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostAC());
    },
    updateNewPostText: (text) => {
      dispatch(uppdateNewPostTextAC(text));
    },
    setUserProfile: (userProfile) => {
      dispatch(setUserProfileAC(userProfile));
    },
  };
};

let WithURLDataConteinerComponent =  withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataConteinerComponent);