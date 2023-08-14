import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//Components
import CartIcon from "../CartIcon/CartIcon";
import SearchBar from "../SearchBar/SearchBar";

//Fonts & Icons
import { BsWhatsapp } from "react-icons/bs";

//Styles
import classes from "./NavBarDesktop.module.css";

const NavBarDesktop = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className={classes.logoContainer}>
        <Link
          to="https://wa.me/+573053388965?text=Guillermo%20Arango,%20How%20can%20I%20help%20you?"
          className={classes.whatsAppWidgetContainer}
        >
          <BsWhatsapp className={classes.whatsAppIcon} />
        </Link>

        <Link className={classes.logo} to={"/"}>
          <img src="/images/logoDev.png" alt="Logo" />
        </Link>

        <div className={classes.rightOptins}>
          <SearchBar />
          <div className={classes.cartWidgetContainer}>
            <div className={classes.numberOfItems}>{cart.itemsCount}</div>
            <CartIcon />
          </div>
        </div>
      </div>

      <nav className={classes.nav}>
        <ul className={classes.navUl}>
          <li className={classes.item}>
            <Link className={classes.itemLink} to={"/category/1"}>
              Accesories
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.itemLink} to={"/category/2"}>
              Cellphones
            </Link>
          </li>

          <li className={classes.item}>
            <Link className={classes.itemLink} to={"/category/3"}>
              Tablets
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.itemLink} to={"/category/4"}>
              Computers
            </Link>
          </li>
          <li className={classes.item}>
            <Link className={classes.itemLink} to={"/category/5"}>
              TV's
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBarDesktop;
