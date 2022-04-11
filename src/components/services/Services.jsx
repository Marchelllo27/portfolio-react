import React from "react";
import ArticleService from "./ArticleService";

import classes from "./Services.module.css";

const backEndLibraries = [
"Express",
"Express-validator",
"Mongoose",
"JWT",
"Multer",
"JEST",
"bcrypt",
"dotenv",
"pre-commit",
"nodemon",
"cors"
]

const frontEndLibraries = [
"React",
"Redux(Toolkit)",
"React Router",
"Formik",
"Yup",
"MUI",
"JEST",
"emailjs",
"animate.css"
]

const Services = () => {
  return (
    <section id="services">
      <h5>What I Use</h5>
      <h2>Libraries/Frameworks</h2>

      <div className={`container ${classes["services__container"]}`}>
        <ArticleService title="Frontend Libraries" description={frontEndLibraries} />
        <ArticleService title="Backend Libraries" description={backEndLibraries} />
      </div>
    </section>
  );
};

export default Services;
