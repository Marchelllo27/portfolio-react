import React from "react";

import classes from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skill = props => {
  return (
    <article className={classes["experience__details"]}>
      <BsPatchCheckFill className={classes["experience__details-icon"]}/>
      <div>
        <h4>{props.name}</h4>
        {props.detail && <small className="text-light">{props.detail}</small>}
      </div>
    </article>
  );
};

export default Skill;
