import React from "react";
import classes from "./../Dialogs.module.css";

// let newMessageElement = React.createRef();

// const newMessage = () => {
//   let text = newMessageElement.current.value;
//   alert(text);
// }

const Message = ({message}) => {
  return (
    <div>
      <div className={classes.formMessage}>{message}</div>
    </div>
  )
};

export default Message;
