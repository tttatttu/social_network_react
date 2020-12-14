import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css";
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
      <div >
        <Field
          component={Textarea}
          name="newPostText"
          placeholder={"Post message"}
          validate={[required, maxLength10]}
          className={classes.formPost}
        />
      </div>
      <div>
        <button className={classes.button}>Add post</button>
      </div>
    </form>
  );
};

const AddElementFormRedux = reduxForm({ form: "profileAddElementForm" })(
  AddNewPostForm
);
const MyPosts = React.memo(props => {
  
    let postsElements = props.posts.map((post) => (
      <Post message={post.message} likesCount={post.likesCount} key={post.id} />
    ));

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
