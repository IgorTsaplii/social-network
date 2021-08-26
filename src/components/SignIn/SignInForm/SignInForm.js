import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControl/FormsControl";
import classes from "../../common/FormsControl/FormsControl.module.css"

const SignInForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        type="text"
        name="email"
        component={Input}
        validate={[required]}
        placeholder="email"
      />
      <Field
        type="password"
        name="password"
        component={Input}
        validate={[required]}
        placeholder="password"
      />
      <label>
        <Field
          type="checkbox"
          name="rememberMe"
          component={Input}
          placeholder="password"
        />{" "}
        Remember me
      </label>
      <p className={classes.form_error}>{props.error}</p>
      <button>Sign-in</button>
    </form>
  );
};

export const ReduxSignInForm = reduxForm({
  form: "signIn",
})(SignInForm);
