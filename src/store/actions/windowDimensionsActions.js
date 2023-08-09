import { windowDimensionsActions } from "../slices/windowDimensionsSlice";

export const resizeWindowDimensions = () => {
  return (dispatch) => {
    const newWindowDimensions = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    };

    dispatch(
      windowDimensionsActions.resizeWindowDimensions(newWindowDimensions)
    );
  };
};
