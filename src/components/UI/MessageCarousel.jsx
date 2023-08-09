import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

//Styles
import classes from "./MessageCarousel.module.css";

const MessageCarousel = ({ titleList, className, delay }) => {
  const [elementActive, setElementActive] = useState(0);

  const numberOfTitles = titleList.length;

  //Rotates carousel
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (elementActive < numberOfTitles - 1) {
        setElementActive((prev) => (prev = prev + 1));
      } else {
        setElementActive(0);
      }
    }, delay);

    return () => clearTimeout(timerId);
  }, [elementActive]);

  return (
    <div className={`${classes.preheader}`}>
      {titleList.map((title, index) => (
        <Link
          key={index}
          className={`${className} ${classes.link} ${
            index == elementActive
              ? classes.displayElement
              : classes.hideElement
          }`}
          to={title.href}
        >
          {title.title}
        </Link>
      ))}
    </div>
  );
};

export default MessageCarousel;
