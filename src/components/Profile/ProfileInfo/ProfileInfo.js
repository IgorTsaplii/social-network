import React, { useState } from "react";
import classes from "./ProfileInfo.module.css";
import UserPhoto from "../../../assets/images/user_icon.png";
import ProfileData from "./ProfileData/ProfileData";
import { ReduxProfileDataForm } from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = (props) => {
  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0]);
    }
  };

  let [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

  return (
    <div className={classes.profile_info}>
      <div className={classes.img_block}>
        <img
          className={classes.user_img}
          src={
            props.userProfile.photos.large != null
              ? props.userProfile.photos.large
              : UserPhoto
          }
          alt="userPhoto"
        />
        {props.isOwner && (
          <label className={classes.img_button}>
            <div>Change image</div>
            <input type="file" onChange={onMainPhotoSelected} />
          </label>
        )}
      </div>
      {editMode ? (
        <ReduxProfileDataForm
          initialValues={props.userProfile}
          userProfile={props.userProfile}
          onSubmit={onSubmit}
        />
      ) : (
        <ProfileData
          activateEditMode={activateEditMode}
          isOwner={props.isOwner}
          status={props.status}
          userProfile={props.userProfile}
          updateProfileStatus={props.updateProfileStatus}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
