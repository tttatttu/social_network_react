import React from "react";
import classes from "./Header.module.css";
import headerImg from "../../img/header.png";
import Nav from "./Nav/Nav";

console.log(headerImg)
const Header = () => {
  return (
    <header
      className={classes.header}
      styles={{ backgroundImage: `url(${headerImg})` }}
      
    >
      <img src="https://toplogos.ru/images/logo-crocs.png" />
      <Nav />
    </header>
  );
};

export default Header;
