/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useContext } from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import classes from "./Footer.module.css";
import context from "../../store/context";

const Footer = () => {
  const navCtx = useContext(context);

  const onLinkClickHandler = value => {
    navCtx.changeActiveLink(value);
  };

  return (
    <footer id="footer">
      <a href="/#" className={classes["footer__logo"]}>
        Tofan Mark
      </a>

      <ul className={classes.permalinks}>
        <li>
          <a href="/#" onClick={onLinkClickHandler.bind(null, "#")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={onLinkClickHandler.bind(null, "#about")}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={onLinkClickHandler.bind(null, "#experience")}>
            Experience
          </a>
        </li>
        <li>
          <a href="#libraries" onClick={onLinkClickHandler.bind(null, "#services")}>
            Libraries
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={onLinkClickHandler.bind(null, "#portfolio")}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onLinkClickHandler.bind(null, "#contact")}>
            Contact
          </a>
        </li>
      </ul>

      <div className={classes["footer__socials"]}>
        <a href="https://www.facebook.com/profile.php?id=100080298755222" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/marktofan" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>

      <div className={classes["footer__copyright"]}>
        <small>&copy; Tofan Mark. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
