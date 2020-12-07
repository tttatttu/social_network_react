import React from "react";
import classes from './Article.module.css';
import mask_1 from '../../../../img/mask_1.jpg';


const Article = () => {
  return (
    <div className={classes.blok}>
      <img className={classes.img} src={mask_1} />
      <h2 className={classes.title}>Путешествие в Берлин в августе </h2>
      <p className={classes.text}>Летний месяц я провела в столице Германии вместе с друзьями. И вот как это было!</p>
      <div className={classes.footer}>
        <p>Теги: путешествия</p>
        <p>29.09.2020</p>
      </div>
    </div>
  );
};

export default Article;