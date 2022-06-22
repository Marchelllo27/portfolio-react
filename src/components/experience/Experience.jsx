import React from "react";

import Skill from "./Skill";
import classes from "./Experience.module.css";

const frontendSkills = [
  { name: "HTML", id: 1 },
  { name: "CSS", id: 2 },
  { name: "JavaScript", id: 3 },
  { name: "TypeScript", id: 4 },
  { name: "React", id: 5 },
  { name: "NextJs", id: 6 },
];

const backendSkills = [
  { name: "Node.js", detail: "Express", id: 1 },
  { name: "MongoDB", detail: "Mongoose", id: 2 },
  { name: "MySQL", detail: "Workbench", id: 3 },
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
              <Skill name={skill.name} key={skill.id} />
            ))}
          </div>
        </div>

        <div className={classes["experience__backend"]}>
          <h3>Backend Development</h3>
          <div className={classes["experience__content"]}>
            {backendSkills.map(skill => (
              <Skill name={skill.name} detail={skill.detail} key={skill.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
