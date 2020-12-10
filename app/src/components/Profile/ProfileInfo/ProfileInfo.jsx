import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import avatar from "./../../../img/avatar.png";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <div className={classes.descriptionBlock}>
          {!profile.photos.large && (
            <img className={classes.photos} src={avatar} />
          )}
          <img src={profile.photos.large} />

          <div>{profile.aboutMe}</div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
