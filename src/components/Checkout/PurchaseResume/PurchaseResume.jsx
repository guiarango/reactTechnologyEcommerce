import React from "react";
import { useSelector } from "react-redux";

//Styles
import classes from "./PurchaseResume.module.css";

const PurchaseResume = () => {
  const cart = useSelector((state) => state.cart);

  return <div>PurchaseResume</div>;
};

export default PurchaseResume;
