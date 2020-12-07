import React from "react";
import classes from "./Menu.module.css"

const Menu = (props) => {
  
  return (
    <a className={classes.menu}>{ props.message }</a>
  );
};

export default Menu;
