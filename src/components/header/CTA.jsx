import React, { useContext } from "react";

import context from "../../store/context";
import CV from "../../assets/cv.pdf";
import classes from "./Header.module.css";

const CTA = () => {
  const navCtx = useContext(context)

  const onLetsTalkHandler = () => {
    navCtx.changeActiveLink("#contact");
  };

  return (
    <div className={classes.cta}>
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a
        href="#contact"
        className="btn btn-primary"
        onClick={onLetsTalkHandler}
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
