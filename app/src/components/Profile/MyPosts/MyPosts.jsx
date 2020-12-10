import React, {Component} from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profileReducer";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          placeholder={"Post message"}
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddElementFormRedux = reduxForm({ form: "profileAddElementForm" })(
  AddNewPostForm
);
const MyPosts = React.memo(props => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps != this.props || nextState != this.props;
  // }
    let postsElements = props.posts.map((post) => (
      <Post message={post.message} likesCount={post.likesCount} />
    ));

    // let newPostElement = React.createRef();

    let onAddPost = (values) => {
      props.addPost(values.newPostText);
    };

    return (
      <div className={classes.postsBlock}>
        <h3>My Posts</h3>
        <AddElementFormRedux onSubmit={onAddPost} />
        <div className={classes.posts}>{postsElements}</div>
      </div>
    );
  
})

export default MyPosts;
