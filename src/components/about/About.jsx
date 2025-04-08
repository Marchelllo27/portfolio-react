import React, { useContext } from "react";

import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import classes from "./About.module.css";
import me from "../../assets/me.jpg";

import context from "../../store/context";

const About = () => {
  const navCtx = useContext(context);

  const onLetsTalkHandler = () => {
    navCtx.changeActiveLink("#contact");
  };

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`container ${classes["about__container"]}`}>
        <div className={classes["about__me"]}>
          <div className={classes["about__me-image"]}>
            <img src={me} alt="About me" />
          </div>
        </div>
        <div className={classes["about__content"]}>
          <div className={classes["about__cards"]}>
            <article className={classes["about__card"]}>
              <FaAward className={classes["about__icon"]} />
              <h5>Experience</h5>
              <small>2+ years of experience</small>
            </article>

            {/* <article className={classes["about__card"]}>
              <FiUsers className={classes["about__icon"]} />
              <h5>Motivation</h5>
              <small>1000+</small>
            </article> */}

            <article className={classes["about__card"]}>
              <VscFolderLibrary className={classes["about__icon"]} />
              <h5>Projects</h5>
              <small>15+</small>
            </article>
          </div>

          <p>
          Full-Stack JavaScript Developer passionate about building fast, responsive, and user-friendly web applications..
          </p>

          <a href="#contact" className="btn btn-primary" onClick={onLetsTalkHandler}>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
