import { configureStore } from "@reduxjs/toolkit";

import windowDimensions from "./slices/windowDimensionsSlice";
import cart from "./slices/cartSlice";

const store = configureStore({
  reducer: { windowDimensions: windowDimensions.reducer, cart: cart.reducer },
});

export default store;
