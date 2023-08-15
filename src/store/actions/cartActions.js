import { cartActions } from "../slices/cartSlice";

export const addProductToCart = (productInfo) => {
  return (dispatch) => {
    dispatch(cartActions.addProductToCart(productInfo));
  };
};

export const increaseProductQuantityByOne = (id) => {
  return (dispatch) => {
    dispatch(cartActions.increaseProductQuantityByOne(id));
  };
};

export const decreaseProductQuantityByOne = (id) => {
  return (dispatch) => {
    dispatch(cartActions.decreaseProductQuantityByOne(id));
  };
};

export const deleteCart = () => {
  return (dispatch) => {
    dispatch(cartActions.deleteCart());
  };
};
