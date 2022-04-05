import React from "react";
import ArticleService from "./ArticleService";

import classes from "./Services.module.css";

const uiUx = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing.",
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className={`container ${classes["services__container"]}`}>
        <ArticleService title="UI/UX" description={uiUx} />
        <ArticleService title="Web Development" description={uiUx} />
        <ArticleService title="Content Creation" description={uiUx} />
      </div>
    </section>
  );
};

export default Services;
