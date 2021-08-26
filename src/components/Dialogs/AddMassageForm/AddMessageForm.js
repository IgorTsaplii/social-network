import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required  } from "../../../utils/validators/validators";
import { Textaria } from "../../common/FormsControl/FormsControl";

const maxLength200 =  maxLengthCreator(200)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="newMassageText"
        component={Textaria}
        placeholder="new message"
        validate={[required, maxLength200]}
      />
      <button>Send</button>
    </form>
  );
};

export const ReduxAddMessageForm = reduxForm({
  form: "addMessage",
})(AddMessageForm);
