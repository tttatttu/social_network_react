import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  

  return (
    <div>
      <div>{props.message}</div>
      <div>{props.likesCount}</div>
     
      
      
    </div>
  );
};

export default Post;
