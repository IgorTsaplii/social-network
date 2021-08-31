import React, { useState, useEffect } from "react";

const ProfileStatusHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateProfileStatus(status)
  };

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value);
  };

  return (
    <>
      {editMode ? (
        <input
          onChange={onStatusChange}
          autoFocus
          onBlur={deactivateEditMode}
          type="text"
          value={status}
        />
      ) : (
        <p onDoubleClick={activateEditMode}>{props.status || "status"}</p>
      )}
    </>
  );
};

export default ProfileStatusHooks;
