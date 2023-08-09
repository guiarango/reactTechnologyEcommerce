import { useCallback } from "react";

//Components
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import NavBarDesktop from "./NavBarDesktop/NavBarDesktop";
import MessageCarousel from "../UI/MessageCarousel";

//Style
import classes from "./NavBar.module.css";

//Store
import { useDispatch, useSelector } from "react-redux";
import { resizeWindowDimensions } from "../../store/actions/windowDimensionsActions";

//Preheader assets
import preheaderAssets from "../../assets/preheaderTitleList.json";

const NavBar = () => {
  const windowDimensionsSelector = useSelector(
    (state) => state.windowDimensions
  );

  const dispatchAction = useDispatch();

  const handleWindowResize = useCallback(() => {
    dispatchAction(resizeWindowDimensions());
  }, []);

  //Event handler to change the dimensions of the NavBar Component
  window.addEventListener("resize", handleWindowResize);

  //Object to render
  const objectToRender =
    windowDimensionsSelector.windowWidth <= 500 ? (
      <NavBarMobile />
    ) : (
      <NavBarDesktop />
    );

  //Cart widget

  return (
    <header className={classes.header}>
      <MessageCarousel
        className="preheader"
        titleList={preheaderAssets}
        delay={5000}
      ></MessageCarousel>

      {objectToRender}
    </header>
  );
};

export default NavBar;
