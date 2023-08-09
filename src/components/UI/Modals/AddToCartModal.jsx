import React from "react";
import ReactDOM from "react-dom";

//Components
import Backdrop from "./Backdrop";
import Card from "../Card";
import Button from "../Button";

// Styles
import classes from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  const productInfo = props.productInfo;
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Product added to cart</h2>
      </header>
      <div className={classes.content}>
        <p>
          You have just added a {productInfo.name} for a value of $
          {productInfo.price * (1 - productInfo.discount)}
        </p>
        <p>Check the cart for more info</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm} className={classes.actionButton}>
          Continue
        </Button>
      </footer>
    </Card>
  );
};

const AddToCartModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          productInfo={props.productInfo}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default AddToCartModal;
