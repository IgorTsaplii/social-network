import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import { Input } from "../../../common/FormsControl/FormsControl";
import classes from "./ProfileDataForm.module.css";

const maxLength20 = maxLengthCreator(20);
const maxLength300 = maxLengthCreator(300);

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.profile_data_form}>
      <button className={classes.save_button}>Save</button>
      <label>
        Name
        <Field
          type="text"
          name="fullName"
          component={Input}
          validate={[required, maxLength20]}
          placeholder="Enter your name"
        />
      </label>
      <label>
        Looking for a job
        <Field type="checkbox" name="lookingForAJob" component={Input} />
      </label>
      <label>
        My professional skills
        <Field
          type="text"
          name="lookingForAJobDescription"
          component={Input}
          validate={[required, maxLength300]}
          placeholder="Enter your professional skills"
        />
      </label>
      <label>
        About me
        <Field
          type="text"
          name="aboutMe"
          component={Input}
          validate={[required, maxLength300]}
          placeholder="Tell us about yourself"
        />
      </label>
      <div className={classes.profile_data_contacts_form}>
        <p>Contacts:</p>
        {Object.keys(props.userProfile.contacts).map((key) => {
          return (
            <label key={key}>
              {key}
              <Field
                type="text"
                name={`contacts.${key}`}
                component={Input}
                placeholder={`Enter your ${key}`}
              />
            </label>
          );
        })}
        <p className={classes.form_error}>{props.error}</p>
      </div>
    </form>
  );
};

export const ReduxProfileDataForm = reduxForm({
  form: "profileData",
})(ProfileDataForm);
