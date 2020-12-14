import React from "react";
import ArticleButton from "./ArticleButton/ArticleButton";
import ArticlesTitle from "./ArticlesTitle/ArticlesTitle";
import classes from './Articles.module.css';
import Article from "./Article/Article";

const Articles = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <ArticlesTitle />
        <ArticleButton />
      </div>
      <div className={classes.blok}>
        <Article />
        <Article />
        <Article />
      </div>
      <ArticleButton />
    </div>
  );
};

export default Articles;