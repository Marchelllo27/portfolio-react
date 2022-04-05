import React from "react";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import classes from "./Portfolio.module.css";
import Project from "./Project";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 2,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 3,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 4,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 5,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
  {
    id: 6,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribbble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${classes["portfolio__container"]}`}>
      {data.map(project => <Project key={project.id} id={project.id} data={project}/>)}

        {/* <article className={classes["portfolio__item"]}>
          <div className={classes["portfolio__item-image"]}>
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className={classes["portfolio__item-cta"]}>
            <a href="https//github.com" className="btn">
              Github
            </a>
            <a
              href="https//dribbble.com/Alien_pixels"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
