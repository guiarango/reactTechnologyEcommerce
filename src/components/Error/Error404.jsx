import React from "react";

//Styles
import classes from "./Error404.module.css";

const Error404 = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.number}>404</h1>
      <h2 className={classes.copy}>Page not Found</h2>
    </div>
  );
};

export default Error404;
