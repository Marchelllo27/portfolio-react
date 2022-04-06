import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import classes from "./Header.module.css";

const HeaderSocials = () => {
  return (
    <div className={classes["header__socials"]}>
      <a href="https://www.linkedin.com/in/marc-tofan-8345b0229/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Marchelllo27" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100080298755222" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
    </div>
  );
};

export default HeaderSocials;
