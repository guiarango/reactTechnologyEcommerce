import { createSlice } from "@reduxjs/toolkit";

import {
  productExists,
  calculateItemsCount,
  calculateItemsTotal,
} from "../../Utils/Cart";

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
      const productToAdd = action.payload;

      const itemExist = productExists(state.items, productToAdd);

      if (itemExist) {
        itemExist.quantity++;
      } else {
        state.items.push({ ...productToAdd, quantity: 1 });
      }

      //Calculate itemsTotal
      state.itemsTotal = calculateItemsTotal(state.items);

      //Calculate itemsCount
      state.itemsCount = calculateItemsCount(state.items);
    },

    increaseProductQuantityByOne(state, action) {
      const productId = { id: action.payload };

      const itemExist = productExists(state.items, productId);
      itemExist.quantity++;

      //Calculate itemsTotal
      state.itemsTotal = calculateItemsTotal(state.items);

      //Calculate itemsCount
      state.itemsCount = calculateItemsCount(state.items);
    },

    decreaseProductQuantityByOne(state, action) {
      const productId = { id: action.payload };

      const itemExist = productExists(state.items, productId);

      if (itemExist.quantity == 1) {
        const newItemsArray = state.items.filter(
          ({ id }) => id !== productId.id
        );
        state.items = newItemsArray;
      } else {
        itemExist.quantity--;
      }

      //Calculate itemsTotal
      state.itemsTotal = calculateItemsTotal(state.items);

      //Calculate itemsCount
      state.itemsCount = calculateItemsCount(state.items);
    },

    deleteCart(state, action) {
      return initialState;
    },
  },
});

export const cartActions = cart.actions;

export default cart;
