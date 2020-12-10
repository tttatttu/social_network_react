import React from "react";
import Articles from "./Articles/Articles";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileContainer from "./ProfileContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <div className={classes.profile}>
      {/* <Articles /> */}
      {/* <div className={classes.post}>w</div>
      <div>
        <div className={classes.item}>w</div>
      </div> */}
      {/* <ProfileContainer /> */}
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
