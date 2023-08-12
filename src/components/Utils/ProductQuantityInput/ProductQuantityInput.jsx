import React from "react";

//Components
import Card from "../../UI/Card";

//Styles
import classes from "./ProductQuantityInput.module.css";

const ProductQuantityInput = ({ increase, decrease, value, id }) => {
  const increaseQuantity = () => {
    increase(id);
    console.log("press");
  };

  const decreaseQuantity = () => {
    decrease(id);
  };

  return (
    <div className={classes.optionsContainer}>
      <span onClick={decreaseQuantity} className={classes.button}>
        -
      </span>
      <input type="number" value={value} disabled className={classes.input} />
      <span onClick={increaseQuantity} className={classes.button}>
        +
      </span>
    </div>
  );
};

export default ProductQuantityInput;
