import React from "react";

import classes from "./Portfolio.module.css";

const Project = props => {
  return (
    <article className={classes["portfolio__item"]}>
      <div className={classes["portfolio__item-image"]}>
        <img src={props.data.image} alt={props.data.title} />
      </div>
      <h3>{props.data.title}</h3>
      <div className={classes["portfolio__item-cta"]}>
        <a
          href={props.data.github}
          className="btn"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href={props.data.demo}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Project;
