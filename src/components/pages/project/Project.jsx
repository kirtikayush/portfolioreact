import React from "react";
import "./Project.css";
import projectsData from "./projectsData";

const Project = ({ isDark }) => {
  return (
    <div className={`project ${isDark ? "dark" : "light"}`}>
      <div className={`projectMain ${isDark ? "dark" : "light"}`}>
        <hproject>projects</hproject>
        <div className="projectListed">
          {projectsData.map((proj) => (
            <a
              key={proj.id}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projectCard"
            >
              <div className="projectText">
                <h3>{proj.name}</h3>
                <p className="projectSkills">{proj.skills.join(", ")}</p>
                <p className="projectDescription">{proj.description}</p>
              </div>
              <img src={proj.image} alt={proj.name} className="projectImage" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
