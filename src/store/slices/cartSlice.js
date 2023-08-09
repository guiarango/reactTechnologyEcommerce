import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsCount: 0,
  itemsTotal: 0,
  items: [],
};

const cart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCart(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const cartActions = cart.actions;

export default cart;
