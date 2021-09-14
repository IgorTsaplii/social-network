import Profile from "./Profile";
import {
  addPost,
  getProfileData,
  getProfileStatus,
  updateProfileStatus,
  savePhoto,
  saveProfile
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.authId;
    this.props.getProfileData(userId);
    this.props.getProfileStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile();
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.match.params.userId}
        status={this.props.status}
        updateProfileStatus={this.props.updateProfileStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    userProfile: state.profilePage.userProfile,
    authId: state.auth.userId,
    status: state.profilePage.status,
  };
};

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithURLDataConteinerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {
//   addPost,
//   updateNewPostText,
//   getProfileData,
// })(WithURLDataConteinerComponent);

export default compose(
  connect(mapStateToProps, {
    addPost,
    getProfileData,
    getProfileStatus,
    updateProfileStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
