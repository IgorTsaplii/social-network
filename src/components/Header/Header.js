import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>My social network</h1>
      <div className={classes.login_block}>
        {props.isAuth ? (
          <div>
            <p className={classes.login}><NavLink to="/profile">{props.login}</NavLink></p>
            <button className={classes.logout_button} onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to="/sign-in">sign-in</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
