import React from "react";

// import pictures
import church from "../../assets/church.png";
import hosting from "../../assets/hosting.png";
// import portfolio from "../../assets/portfolio.png";
import travel from "../../assets/travel.png";
import gym from "../../assets/gym.png";
import youtubeImage from "../../assets/youtubeImage.png";
import eat from "../../assets/eat.png";
import tShirt from "../../assets/t-shirt.png";
import brainwave from "../../assets/brainwave.png";

import Project from "./Project";
import classes from "./Portfolio.module.css";

const data = [
  {
    id: 1,
    image: brainwave,
    title: "Generative AI made for creators",
    github: "https://github.com/Marchelllo27/brainwave-",
    demo: "https://brainwave-ai-service.netlify.app/",
  },
  {
    id: 2,
    image: tShirt,
    title: "The 3D T-Shirt Customization",
    github: "https://github.com/Marchelllo27/threejs-tshirt",
    demo: "https://threejs-tshirt-puce.vercel.app/",
  },
  {
    id: 3,
    image: youtubeImage,
    title: "The Youtube Clone(MERN Stack)",
    github: "https://github.com/Marchelllo27/youtube-clone",
    demo: "https://youtube-clone-chi-virid.vercel.app",
  },
  {
    id: 4,
    image: gym,
    title: "Gym Workouts(React + RapidAPI)",
    github: "https://github.com/Marchelllo27/gym_exercises",
    demo: "https://gym-muscles.netlify.app",
  },
  {
    id: 5,
    image: eat,
    title: "The Food order(MERN Stack)",
    github: "https://github.com/Marchelllo27/final-project-passerelle-react",
    demo: "https://eat-smart-app.netlify.app",
  },
  // {
  //   id: 5,
  //   image: portfolio,
  //   title: "This is my portfolio website (React)",
  //   github: "https://github.com/Marchelllo27/portfolio-react",
  //   demo: "https://portfolio-marc.netlify.app",
  // },
  {
    id: 6,
    image: church,
    title: "The church website (HTML/CSS/JS)",
    github: "https://github.com/Marchelllo27/Marchelllo27.github.io",
    demo: "https://marchelllo27.github.io/",
  },
  {
    id: 7,
    image: hosting,
    title: "The Hosting Website(HTML/CSS)",
    github: "https://github.com/Marchelllo27/loruki-website",
    demo: "https://loruki-demo-hosting.netlify.app",
  },
  {
    id: 8,
    image: travel,
    title: "The travel website(HTML/CSS/JS)",
    github: "https://github.com/Marchelllo27/Travel.CreatWebsite-With-Video-Background",
    demo: "https://travel-backgroundvideo.netlify.app/",
  },
  // {
  //   id: 10,
  //   image: car,
  //   title: "The Cars sale(Node + EJS)",
  //   github: "https://github.com/Marchelllo27/ONLINE-SHOP-SHWARZ",
  //   demo: "https://carsale-node-ejs.herokuapp.com/",
  // },
  // {
  //   id: 4,
  //   image: travel,
  //   title: "Your Places (MERN Stack)",
  //   github: "https://github.com/Marchelllo27/mern-guide-places",
  //   demo: "https://mern-guide-frontend.web.app",
  // },
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
