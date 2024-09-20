import React from "react";
// import pictures
import youtubeImage from "../../assets/youtubeImage.png";
import eat from "../../assets/eat.png";
import tShirt from "../../assets/t-shirt.png";
import brainwave from "../../assets/brainwave.png";
import clothShop from "../../assets/cloth-shop.png";

import Project from "./Project";
import classes from "./Portfolio.module.css";

const data = [
  {
    image: clothShop,
    title: "E-Commerce Fashion Store",
    github: "https://github.com/Marchelllo27/clothes-e-commerce-shop",
    demo: "https://clothes-e-commerce-shop-d7ly0a242-marchelllo27s-projects.vercel.app",
  },
  {
    image: tShirt,
    title: "The 3D T-Shirt Customization",
    github: "https://github.com/Marchelllo27/threejs-tshirt",
    demo: "https://threejs-tshirt-puce.vercel.app/",
  },
  {
    image: youtubeImage,
    title: "Video Sharing App(MERN Stack)",
    github: "https://github.com/Marchelllo27/youtube-clone",
    demo: "https://youtube-clone-chi-virid.vercel.app",
  },
  {
    image: brainwave,
    title: "Generative AI made for creators",
    github: "https://github.com/Marchelllo27/brainwave-",
    demo: "https://brainwave-ai-service.netlify.app",
  },
  {
    image: eat,
    title: "Food Ordering App(MERN Stack)",
    github: "https://github.com/Marchelllo27/final-project-passerelle-react",
    demo: "https://eat-smart-app.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className={`container ${classes["portfolio__container"]}`}>
        {data.map(project => (
          <Project key={project.title} data={project} />
        ))}
      </div>
      
    </section>
  );
};

export default Portfolio;
