import Profile from "./Profile";
import {
  addPost,
  getProfileData,
  getProfileStatus,
  updateProfileStatus,
} from "../../redux/profile-reducer";
import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.authId;
    this.props.getProfileData(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return (
      <Profile
      {...this.props}
        status={this.props.status}
        updateProfileStatus={this.props.updateProfileStatus}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
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
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
