import React from "react";
import classes from "./Header.module.css";
import headerImg from "../../img/header.png";
import Nav from "./Nav/Nav";
import { NavLink } from "react-router-dom";

const Header = ({login, logout, isAuth, ...props}) => {
  return (
    <header
      className={classes.header}
      styles={{ backgroundImage: `url(${headerImg})` }}
      
    >
      <img src="https://toplogos.ru/images/logo-crocs.png" />
      {/* <Nav /> */}
      <div className={classes.loginBlock}>
        { isAuth 
        ? <div>{login} - <button onClick={logout}>Log out</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
