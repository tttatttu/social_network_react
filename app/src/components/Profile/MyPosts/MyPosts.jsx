import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../redux/profileReducer";



const MyPosts = (props) => {

  let postsElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  }  

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // props.dispatch(updateNewPostActionCreator(text));
    
  }

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} 
        value={props.newPostText} />
      </div>
      <div>
        <button onClick={ onAddPost }>Add post</button>
      </div>
      <div>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;
