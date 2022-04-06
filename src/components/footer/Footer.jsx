/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="/#" className={classes["footer__logo"]}>Tofan Marc</a>

      <ul className={classes.permalinks}>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={classes["footer__socials"]}>
        <a href="https://www.facebook.com/profile.php?id=100080298755222" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/marc-tofan-8345b0229/" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>


      <div className={classes["footer__copyright"]}>
        <small>&copy; Tofan Marc. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
