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
"Supertest",
"bcrypt",
"dotenv",
"pre-commit",
]

const frontEndLibraries = [
"React",
"Redux(Toolkit)",
"RTK Query",
"React Router 6",
"Formik",
"Yup",
"MUI",
"Tailwindcss",
"Styled-Components",
"JEST",
]

const Libraries = () => {
  return (
    <section id="libraries">
      <h5>What I Use</h5>
      <h2>Libraries/Frameworks</h2>

      <div className={`container ${classes["services__container"]}`}>
        <ArticleService title="Frontend Libraries" description={frontEndLibraries} />
        <ArticleService title="Backend Libraries" description={backEndLibraries} />
      </div>
    </section>
  );
};

export default Libraries;
