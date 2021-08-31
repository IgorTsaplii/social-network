import React from "react";
import UserPhoto from "../../assets/images/user_icon.png";
import classes from "./Users.module.css";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <section>
      <h2>Users</h2>
      <div>
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
        />
      </div>
      <div className={classes.user_list}>
        {users.map((user) => (
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
