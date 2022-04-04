import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import classes from "./Header.module.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className={`container ${classes["header__container"]}`}>
        <h5>Hello I'm</h5>
        <h1>Tofan Marc</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={classes.me}>
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className={classes["scroll__down"]}>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
