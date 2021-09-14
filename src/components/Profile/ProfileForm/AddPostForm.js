import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { maxLengthCreator } from "../../../utils/validators/validators";
import { Textaria } from "../../common/FormsControl/FormsControl";
import classes from "../Profile.module.css";

const maxLength500 = maxLengthCreator(500);
const afterSubmit = (result, dispatch) =>
  dispatch(reset('addPost'));

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.add_post_form}>
      <Field
        component={Textaria}
        name="newPostText"
        className={classes.input_new_post}
        placeholder="new post"
        validate={[maxLength500]}
      />
      <p className={classes.button_block}>
        <button>Add post</button>
      </p>
    </form>
  );
};

export const ReduxAddPostForm = reduxForm({
  form: "addPost",
  onSubmitSuccess: afterSubmit,
})(AddPostForm);
