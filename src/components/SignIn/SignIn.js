import React from "react";
import { connect } from "react-redux";
import { ReduxSignInForm } from "./SignInForm/SignInForm";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <section>
        <h2>Sign - in</h2>
        <ReduxSignInForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
      </section>
    );
  }
};



const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl:state.auth.captchaUrl
});

export default connect(mapStateToProps, { login })(SignIn);
