import React from "react";
import CV from "../../assets/cv.pdf";

import classes from "./Header.module.css"

const CTA = () => {
  return (
    <div className={classes.cta}>
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  );
};

export default CTA;
