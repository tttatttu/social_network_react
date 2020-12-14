import React from "react";


const ArticleTitle = () => {
  return (
    <h3 className={classes.title}>{ props.message }</h3>
  );
};

export default ArticleTitle;