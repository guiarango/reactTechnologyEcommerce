import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

//Fonts & Icons
import {
  BsBag,
  BsWhatsapp,
  BsFillFilterCircleFill,
  BsXCircleFill,
  BsGithub,
} from "react-icons/bs";

//Styles
import classes from "./NavBarMobile.module.css";

const NavBarMobile = () => {
  const [activeNav, setActiveNav] = useState(false);

  const changeActiveNavState = useCallback(() => {
    setActiveNav((prev) => !prev);
  }, []);

  return (
    <>
      <div className={classes.logoContainer}>
        <Link className={classes.logo} to={"/"}>
          <img src="/images/logoDev.png" alt="Logo" />
        </Link>
      </div>

      <div className={classes.menuContainer}>
        <div className={classes.contactIcons}>
          <Link
            to="https://wa.me/+573053388965?text=Guillermo%20Arango,%20How%20can%20I%20help%20you?"
            className={classes.whatsAppWidgetContainer}
          >
            <BsWhatsapp className={classes.whatsAppIcon} />
          </Link>
          <Link
            to={"https://github.com/guiarango"}
            className={classes.gitHubIcon}
          >
            <BsGithub />
          </Link>
        </div>

        <div onClick={changeActiveNavState} className={classes.activateNav}>
          {activeNav ? <BsXCircleFill /> : <BsFillFilterCircleFill />}
        </div>
        <div className={classes.cartWidgetContainer}>
          <div className={classes.numberOfItems}>0</div>
          <BsBag className={classes.cartIcon} />
        </div>
      </div>

      <nav
        className={`${classes.nav} ${
          activeNav ? classes.navActive : classes.navInactive
        }`}
      >
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

export default NavBarMobile;
