import React from "react";

import { BiCheck } from "react-icons/bi";
import classes from "./Services.module.css";

const ArticleService = props => {
  return (
    <article className={classes.service}>
      <div className={classes["service__head"]}>
        <h3>{props.title}</h3>
      </div>

      <ul className={classes["service__list"]}>
        {props.description.map((item, index) => (
          <li key={index}>
            <BiCheck className={classes["service__list-icon"]} />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ArticleService;
