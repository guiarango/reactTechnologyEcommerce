import React from "react";

//Components
import CheckoutForm from "./Form/CheckoutForm";
import PurchaseResume from "./PurchaseResume/PurchaseResume";

//Styles
import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={classes.checkoutContainer}>
      <CheckoutForm />
      <PurchaseResume />
    </div>
  );
};

export default Checkout;
