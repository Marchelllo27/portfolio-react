import React from "react";

import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import classes from "./About.module.css";
import lux from "../../assets/lux.jpeg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`container ${classes["about__container"]}`}>
        <div className={classes["about__me"]}>
          <div className={classes["about__me-image"]}>
            <img src={lux} alt="About me" />
          </div>
        </div>
        <div className={classes["about__content"]}>
          <div className={classes["about__cards"]}>
            <article className={classes["about__card"]}>
              <FaAward className={classes["about__icon"]} />
              <h5>Experience</h5>
              <small>6 months experience</small>
            </article>

            <article className={classes["about__card"]}>
              <FiUsers className={classes["about__icon"]} />
              <h5>Motivation</h5>
              <small>1000+</small>
            </article>

            <article className={classes["about__card"]}>
              <VscFolderLibrary className={classes["about__icon"]} />
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>

          <p>
            Je suis une personne simple et ouverte, j'adore ce métier,
            j'apprends toujours quelque chose de nouveau en programmation, ça me
            fait énormément plaisir. Je suis prêt pour de nouveaux défis. Je ne
            suis pas une personne conflictuelle, il est donc facile de
            travailler avec moi.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
