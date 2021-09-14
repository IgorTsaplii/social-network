import React, { useState, useEffect } from "react";
import classes from "../ProfileInfo/ProfileData/ProfileData.module.css";

const ProfileStatusHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    props.isOwner && setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateProfileStatus(status);
  };

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <>
      {editMode ? (
        <input
          className={classes.profile_status_input}
          onChange={onStatusChange}
          autoFocus
          onBlur={deactivateEditMode}
          type="text"
          value={status}
        />
      ) : (
        <p className={classes.profile_status} onDoubleClick={ activateEditMode}>{props.status || "status"}</p>
      )}
    </>
  );
};

export default ProfileStatusHooks;
