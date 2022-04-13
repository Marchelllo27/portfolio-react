import React from "react";

// import pictures
import restaurant from "../../assets/restaurant.png";
import car from "../../assets/car.png";
import church from "../../assets/church.png";
import hosting from "../../assets/hosting.png";
import portfolio from "../../assets/portfolio.png";
import travel from "../../assets/travel.png";

import Project from "./Project";
import classes from "./Portfolio.module.css";

const data = [
  {
    id: 1,
    image: restaurant,
    title: "The Food order(MERN Stack)",
    github: "https://github.com/Marchelllo27/final-project-passerelle-react",
    demo: "https://eat-smart-passerelle-final.herokuapp.com/",
  },
  {
    id: 2,
    image: car,
    title: "The Cars sale(Node + EJS)",
    github: "https://github.com/Marchelllo27/ONLINE-SHOP-SHWARZ",
    demo: "https://carsale-node-ejs.herokuapp.com/",
  },
  {
    id: 3,
    image: portfolio,
    title: "This is my portfolio website (React)",
    github: "https://github.com",
    demo: "https://google.com",
  },
  {
    id: 4,
    image: church,
    title: "The church website (HTML/CSS/JS)",
    github: "https://github.com/Marchelllo27/Marchelllo27.github.io",
    demo: "https://marchelllo27.github.io/",
  },
  {
    id: 5,
    image: hosting,
    title: "The Hosting Website(HTML/CSS)",
    github: "https://github.com/Marchelllo27/loruki-website",
    demo: "https://loruki-demo-hosting.netlify.app",
  },
  {
    id: 6,
    image: travel,
    title: "The travel website(HTML/CSS/JS)",
    github: "https://github.com/Marchelllo27/Travel.CreatWebsite-With-Video-Background",
    demo: "https://travel-backgroundvideo.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${classes["portfolio__container"]}`}>
        {data.map(project => (
          <Project key={project.id} id={project.id} data={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
