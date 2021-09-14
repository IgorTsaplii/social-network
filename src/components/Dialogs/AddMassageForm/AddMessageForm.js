import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import { maxLengthCreator } from "../../../utils/validators/validators";
import { Textaria } from "../../common/FormsControl/FormsControl";
import classes from "../Dialogs.module.css";

const maxLength200 = maxLengthCreator(200);
const afterSubmit = (result, dispatch) =>
  dispatch(reset('addMessage'));

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.send_messag_form}>
      <Field
        name="newMassageText"
        component={Textaria}
        placeholder="new message"
        validate={[maxLength200]}
      />
      <button>Send</button>
    </form>
  );
};

export const ReduxAddMessageForm = reduxForm({
  form: "addMessage",
  onSubmitSuccess: afterSubmit,
})(AddMessageForm);
