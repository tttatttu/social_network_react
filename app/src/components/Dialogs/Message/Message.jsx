import React from "react";
import classes from "./../Dialogs.module.css";

let newMessageElement = React.createRef();

const newMessage = () => {
  let text = newMessageElement.current.value;
  alert(text);
}

const Message = (props) => {
  return (
    <div>
      <div className={classes.message}>{props.message}</div>
      {/* <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={ newMessage }>Add message</button>
      </div> */}
    </div>
  
  )
};

export default Message;
