import React from "react";

import Skill from "./Skill";
import classes from "./Experience.module.css";

const frontendSkills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React" },
];

const backendSkills = [
  { name: "Node.js", detail: "Express" },
  { name: "MongoDB", detail: "Mongoose" },
  { name: "MySQL", detail: "Workbench" },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={`container ${classes["experience__container"]}`}>
        <div className={classes["experience__frontend"]}>
          <h3>Frontend Development</h3>
          <div className={classes["experience__content"]}>
            {frontendSkills.map(skill => (
              <Skill name={skill.name} />
            ))}
          </div>
        </div>

        <div className={classes["experience__backend"]}>
          <h3>Backend Development</h3>
          <div className={classes["experience__content"]}>
            {backendSkills.map(skill => (
              <Skill name={skill.name} detail={skill.detail} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
