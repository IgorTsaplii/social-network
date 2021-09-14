import React from "react";
import ProfileStatusHooks from "../../ProfileStatus/ProfileStatusHooks";
import classes from "./ProfileData.module.css";

const ProfileData = (props) => {
  return (
    <div className={classes.profile_data}>
      {props.isOwner && (
        <button
          className={classes.edit_button}
          onClick={props.activateEditMode}
        >
          Edit
        </button>
      )}
      <p className={classes.profile_name}>{props.userProfile.fullName}</p>
      <ProfileStatusHooks
        isOwner={props.isOwner}
        status={props.status}
        updateProfileStatus={props.updateProfileStatus}
      />
      <p>
        About me:
        <span>{props.userProfile.aboutMe}</span>
      </p>
      <p>
        Looking for a job:
        <span>{props.userProfile.lookingForAJob ? "Yes" : "No"}</span>
      </p>
      <p>
        My professional skills:
        <span>{props.userProfile.lookingForAJobDescription}</span>
      </p>
      <div>
        <p>Contacts:</p>
        {Object.keys(props.userProfile.contacts).map((key) => {
          if (props.userProfile.contacts[key])
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={props.userProfile.contacts[key]}
              />
            );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <p className={classes.profile_contact}>
      {contactTitle}: <span>{contactValue}</span>
    </p>
  );
};

export default ProfileData;
