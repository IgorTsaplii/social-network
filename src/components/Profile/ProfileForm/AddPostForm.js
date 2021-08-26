import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import {Input } from "../../common/FormsControl/FormsControl";
import classes from "../Profile.module.css";

const maxLength500 =  maxLengthCreator(500)

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        name="newPostText"
        className={classes.input_new_post}
        placeholder="new post"
        validate={[required, maxLength500]}
      />
      <button>Add post</button>
    </form>
  );
};

export const ReduxAddPostForm = reduxForm({
  form: "addPost",
})(AddPostForm);
