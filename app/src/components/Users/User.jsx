import React from "react";
import classes from "./users.module.css";
import userPhoto from "../../img/avatar.png";
import { NavLink } from "react-router-dom";


let User = ({ user, followingInProgress, unfollow, follow }) => {

  return (
    
        <div className={classes.userProfile}>
          <span>
            <div >
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={classes.userPhoto}
                />
              </NavLink>
            </div>
            <div className={classes.button}>
              {user.followed ? (
                <button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    unfollow(user.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  disabled={followingInProgress.some((id) => id === user.id)}
                  onClick={() => {
                    follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div className={classes.userInfo}>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div className={classes.userInfo}>{"user.location.country"}</div>
              <div className={classes.userInfo}>{"user.location.city"}</div>
            </span>
          </span>
        </div> 
  );
};

export default User;
