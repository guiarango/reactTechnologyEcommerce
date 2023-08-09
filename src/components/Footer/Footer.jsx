import React from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp, BsGithub } from "react-icons/bs";

//Styles
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div>
        <h2>Nuestras redes sociales</h2>
        <div className={classes.socialMedia}>
          <Link
            to={
              "https://wa.me/+573053388965?text=Guillermo%20Arango,%20How%20can%20I%20help%20you?"
            }
          >
            <BsWhatsapp className={classes.whatsAppIcon} />
          </Link>

          <Link to={"https://github.com/guiarango"}>
            <BsGithub className={classes.gitHubIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
