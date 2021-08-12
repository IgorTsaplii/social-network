import React from "react";
import classes from "./Preloader.module.css"
import preloader from "../../../assets/images/loader.gif";

const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} alt="preloader" width="50" height="50" />
    </div>
  );
};

export default Preloader;
