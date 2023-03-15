import React from "react";
import {projects} from "./projectdata";
import "./project.css";

function Projects() {
    return (
        <section id="projectsection" className="section">
            <div className="projectsdiv">
                <div className="projectdetail">
                    <h1 className="headline">Projects I've built</h1>
                    <p className="para">Here's some glimpse of the Projects I've made and worked on!</p>
                </div>
                <div className="projectmap">
          {projects.map((project) => (
            <a
            href={project.link}
            // key={project.image}
            className="link">
                <div className="imagediv">
                <div className="detail">
           <h1>{project.title}</h1>
           <h2 > {project.subtitle}</h2>
           <p>{project.description}</p>
           </div>
           </div>
           </a>
          
          ))}
            </div>
            </div>
        </section>
    );
}
export default Projects;