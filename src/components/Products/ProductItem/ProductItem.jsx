import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

//Utils
import { addToCartAction } from "../../../Utils/Cart";

//Components
import Button from "../../UI/Button";
import AddToCartModal from "../../UI/Modals/AddToCartModal";

//Styles
import classes from "./ProductItem.module.css";

//Store
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../store/actions/cartActions";

const ProductItem = ({ productInfo }) => {
  const [activeAddToCartModal, setActiveAddToCartModal] = useState(null);

  const dispatchAction = useDispatch();

  const addToCart = useCallback((event) => {
    addToCartAction(event);
    dispatchAction(addProductToCart(productInfo));
    setActiveAddToCartModal(productInfo);
  }, []);

  const priceChanged = (
    <div className={classes.price}>
      <p className={classes.oldPrice}>${productInfo.price}</p>
      <p className={classes.newPrice}>
        ${productInfo.price * (1 - productInfo.discount)}
      </p>
    </div>
  );

  const closeAddToCartModal = () => {
    setActiveAddToCartModal(null);
  };

  return (
    <>
      {activeAddToCartModal && (
        <AddToCartModal
          productInfo={productInfo}
          onConfirm={closeAddToCartModal}
        />
      )}
      <Link to={`/detail/${productInfo.id}`} className={classes.productItem}>
        <img
          src={productInfo.url}
          alt={productInfo.name}
          className={classes.image}
        />
        <h2 className={classes.title}>{productInfo.name}</h2>
        {productInfo.discount == 0 ? (
          <p className={classes.price}>${productInfo.price}</p>
        ) : (
          priceChanged
        )}

        <Button className={classes.addToCart} onClick={addToCart}>
          Add
        </Button>
      </Link>
    </>
  );
};

export default ProductItem;
