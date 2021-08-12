import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.menu}>
      <ul>
        <li><NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink></li>
        <li><NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink></li>
        <li><NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
        <li><NavLink to="/users" activeClassName={classes.active}>Users</NavLink></li>
        <li><NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
