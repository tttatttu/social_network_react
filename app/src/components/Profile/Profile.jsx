import React from "react";
import Articles from "./Articles/Articles";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileContainer from "./ProfileContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <Articles />
      <div className={classes.post}>w</div>
      <div>
        <div className={classes.item}>w</div>
      </div>
      {/* <ProfileContainer /> */}
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
