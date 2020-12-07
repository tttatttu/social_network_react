import React from "react";
import Menu from "./Menu/Menu";
import classes from "./Nav.module.css"

const Nav = () => {
  return (
    <nav className={classes.nav}>
        <Menu message='Статьи'/>
        <Menu message='Обо мне'/>
        <Menu message='Портфолио'/>
        <Menu message='Написать мне'/>
      </nav>
  );
};

export default Nav;
