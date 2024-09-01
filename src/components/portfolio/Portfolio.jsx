import React from "react";
// import pictures
import church from "../../assets/church.png";
import hosting from "../../assets/hosting.png";
import travel from "../../assets/travel.png";
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
    title: "E-Commerce Clothing Store",
    github: "https://github.com/Marchelllo27/clothes-e-commerce-shop",
    demo: "https://clothes-e-commerce-shop-d7ly0a242-marchelllo27s-projects.vercel.app",
  },
  {
    image: brainwave,
    title: "Generative AI made for creators",
    github: "https://github.com/Marchelllo27/brainwave-",
    demo: "https://brainwave-ai-service.netlify.app",
  },
  {
    image: tShirt,
    title: "The 3D T-Shirt Customization",
    github: "https://github.com/Marchelllo27/threejs-tshirt",
    demo: "https://threejs-tshirt-puce.vercel.app/",
  },
  {
    image: youtubeImage,
    title: "The Youtube Clone(MERN Stack)",
    github: "https://github.com/Marchelllo27/youtube-clone",
    demo: "https://youtube-clone-chi-virid.vercel.app",
  },
  {
    image: eat,
    title: "The Virtual Restaurant(MERN Stack)",
    github: "https://github.com/Marchelllo27/final-project-passerelle-react",
    demo: "https://eat-smart-app.netlify.app",
  },
  // {
  //   image: church,
  //   title: "The church website (HTML/CSS/JS)",
  //   github: "https://github.com/Marchelllo27/Marchelllo27.github.io",
  //   demo: "https://marchelllo27.github.io/",
  // },
  // {
  //   image: hosting,
  //   title: "The Hosting Website(HTML/CSS)",
  //   github: "https://github.com/Marchelllo27/loruki-website",
  //   demo: "https://loruki-demo-hosting.netlify.app",
  // },
  // {
  //   image: travel,
  //   title: "The travel website(HTML/CSS/JS)",
  //   github: "https://github.com/Marchelllo27/Travel.CreatWebsite-With-Video-Background",
  //   demo: "https://travel-backgroundvideo.netlify.app/",
  // },
];

// add unique Id to each element.
data.forEach(item => {
  item.id = item.title;
});

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
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
