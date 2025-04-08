import React, { useContext } from "react";

import context from "../../store/context";
import CTA from "./CTA";
import classes from "./Header.module.css";
import HeaderSocials from "./HeaderSocials";

import developer from "../../assets/programmer.png"

const Header = () => {
  const navCtx = useContext(context);

  const onScrollDownHandler = () => navCtx.changeActiveLink("#contact");
  return (
    <header>
      <div className={`container ${classes["header__container"]}`}>
        {/* <h5>Hello I'm</h5> */}
        <h1>Tofan Mark</h1>
        <h5 className="text-light">Full-Stack JavaScript Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={classes.me}>
          <img src={developer} alt="developer" />
        </div>
        <a
          href="#contact"
          className={classes["scroll__down"]}
          onClick={onScrollDownHandler}
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
