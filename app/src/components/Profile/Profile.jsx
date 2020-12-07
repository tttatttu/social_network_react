import React from "react";
import Articles from "./Articles/Articles";
import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      {/* <div>
        <img src="https://klike.net/uploads/posts/2019-11/1574605225_22.jpg" />
      </div> */}
      <Articles />
      <div className={classes.post}>w</div>
      <div>
        <div className={classes.item}>w</div>
      </div>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
