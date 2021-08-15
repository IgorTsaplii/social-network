import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { getAuthData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthData();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapsStateToProps, { getAuthData })(
  HeaderContainer
);
