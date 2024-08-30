import React, { useContext } from "react";

import context from "../../store/context";
import resume from "../../assets/resume.pdf";
import classes from "./Header.module.css";

const CTA = () => {
  const navCtx = useContext(context)

  const onLetsTalkHandler = () => {
    navCtx.changeActiveLink("#contact");
  };

  return (
    <div className={classes.cta}>
      <a href={resume} className="btn" download>
        Download Resume
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
