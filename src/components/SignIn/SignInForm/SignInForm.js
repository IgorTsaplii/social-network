import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControl/FormsControl";
import classes from "./SignInForm.module.css";

const SignInForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <label>
        <Field
          type="text"
          name="email"
          component={Input}
          validate={[required]}
          placeholder="Enter your email"
        />
      </label>
      <label>
        <Field
          type="password"
          name="password"
          component={Input}
          validate={[required]}
          placeholder="Enter your password"
        />
      </label>
      <label className={classes.checkbox}>
        Remember me
        <Field type="checkbox" name="rememberMe" component={Input} />
      </label>
      {props.captchaUrl && (
        <label>
          <img src={props.captchaUrl} alt="captcha" />
          <Field
            type="text"
            name="captcha"
            component={Input}
            validate={[required]}
            placeholder="Enter the symbols from the picture"
          />
        </label>
      )}
      <p className={classes.error}>{props.error}</p>
      <button>Sign-in</button>
    </form>
  );
};

export const ReduxSignInForm = reduxForm({
  form: "signIn",
})(SignInForm);
