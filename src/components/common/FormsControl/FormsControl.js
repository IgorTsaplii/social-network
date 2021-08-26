import React from "react";
import classes from "./FormsControl.module.css";

export const FormsControl = ({ input, meta, child, ...props }) => {
  const hasErorr = meta.touched && meta.error;
  return (
    <div
      className={classes.forms_control + " " + (hasErorr ? classes.error : "")}
    >
      {props.children}
      {hasErorr && <span>{meta.error}</span>}
    </div>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <input {...input} {...restProps} />
    </FormsControl>
  );
};

export const Textaria = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormsControl {...props}>
      <textarea {...input} {...restProps} />
    </FormsControl>
  );
};
