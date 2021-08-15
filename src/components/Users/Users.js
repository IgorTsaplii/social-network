import React from "react";
import UserPhoto from "../../assets/images/user_icon.png";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <section>
      <h2>Users</h2>
      <ul className={classes.pages_bar}>
        {pages.map((page) => {
          return (
            <li
              className={props.currentPage === page && classes.selectedPage}
              onClick={(event) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </li>
          );
        })}
      </ul>
      <div className={classes.user_list}>
        {props.users.map((user) => (
          <div key={user.id} className={classes.user_block}>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={user.photos.small != null ? user.photos.small : UserPhoto}
                alt="userPhoto"
              />
            </NavLink>
            <div className={classes.user_data}>
              <NavLink
                to={"/profile/" + user.id}
                className={classes.user_name_link}
              >
                <p className={classes.user_name}>{user.name}</p>
              </NavLink>
              <p className={classes.user_status}>{user.status}</p>
              <div className={classes.user_location}>
                <p>{"city"}</p>
                <p>{"country"}</p>
              </div>
            </div>
            {user.followed ? (
              <button
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                className={classes.follow_button}
                onClick={() => {
                  props.unfollow(user.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                className={classes.follow_button}
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Users;
