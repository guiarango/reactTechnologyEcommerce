import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  windowWidth: window.innerWidth,
  windowHeight: window.innerHeight,
};

const windowDimensions = createSlice({
  name: "windowDimensions",
  initialState: initialState,
  reducers: {
    resizeWindowDimensions(state, action) {
      return action.payload;
    },
  },
});

export const windowDimensionsActions = windowDimensions.actions;

export default windowDimensions;
