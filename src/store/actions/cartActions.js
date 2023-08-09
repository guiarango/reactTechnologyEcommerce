import { cartActions } from "../slices/cartSlice";

export const addProductToCart = (productInfo) => {
  return (dispatch) => {
    dispatch(cartActions.addProductToCart(productInfo));
  };
};
