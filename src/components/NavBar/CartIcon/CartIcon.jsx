import React, { useState } from "react";
import { BsBag } from "react-icons/bs";

//Components
import CartModal from "../../UI/Modals/CartModal";

//Styles
import classes from "./CartIcon.module.css";

const CartIcon = () => {
  const [modalActive, setModalActive] = useState(false);

  const handleModal = () => {
    setModalActive((prev) => !prev);
  };

  return (
    <>
      {modalActive ? <CartModal onConfirm={handleModal} /> : null}
      <BsBag className={classes.cartIcon} onClick={handleModal} />
    </>
  );
};

export default CartIcon;
