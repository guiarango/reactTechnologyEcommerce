import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//Components
import Card from "../../UI/Card";
import ProductQuantityInput from "../../Utils/ProductQuantityInput/ProductQuantityInput";

// Styles
import classes from "./PurchaseResume.module.css";

//Store
import { useDispatch } from "react-redux";
import {
  increaseProductQuantityByOne,
  decreaseProductQuantityByOne,
} from "../../../store/actions/cartActions";

const PurchaseResume = ({ onConfirm }) => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const dispatchAction = useDispatch();

  const increaseQuantity = useCallback((id) => {
    dispatchAction(increaseProductQuantityByOne(id));
  }, []);

  const decreaseQuantity = useCallback((id) => {
    dispatchAction(decreaseProductQuantityByOne(id));
  }, []);

  const goToCheckout = () => {
    navigate("/checkout");
    onConfirm();
  };

  const cartItems =
    cart.items.length <= 0 ? null : (
      <>
        {cart.items.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <img
                  src={item.url}
                  alt={item.name}
                  className={classes["content-image"]}
                />
              </td>
              <td>
                <p>{item.name}</p>
                <p>${item.price * (1 - item.discount)}</p>
              </td>
              <td>
                <p>Quantity</p>
                <ProductQuantityInput
                  value={item.quantity}
                  increase={increaseQuantity}
                  decrease={decreaseQuantity}
                  id={item.id}
                />
              </td>
            </tr>
          );
        })}
      </>
    );

  return (
    <Card className={classes.purchaseContainer}>
      <header className={classes.header}>
        <h2>Cart</h2>
      </header>
      <div className={classes.content}>
        <table className={classes.table}>
          {cart.items.length <= 0 ? (
            <h2>There are not products in your cart</h2>
          ) : (
            cartItems
          )}
        </table>
      </div>

      {cart.items.length <= 0 ? null : (
        <div className={classes.itemsTotal}>Total ${cart.itemsTotal}</div>
      )}
    </Card>
  );
};

export default PurchaseResume;
