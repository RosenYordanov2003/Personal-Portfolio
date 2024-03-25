import "../ProjectCard/ProjectCard.css";
import "../ProjectCard/ProjectCardResponsive.css";
import {useState} from "react";

export default function ProjectCard({project}){

   const [isActive, setIsActive] = useState(false);

  const projectTechnologies = project.technologies.map((x, index) => <li key={index}>{x}</li>)

   return(
     <article className="project-card">
         <div className="project-card-img-container">
             <img src={project.imgUrl}/>
         </div>
         <ul className="project-technologies">
            {projectTechnologies}
         </ul>
         <div className="about-project">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-duration">{project.duration}</p>
            <div className={`project-description-container ${isActive && 'active-project-description'}`}>
               <p className="project-description">{project.description}</p>
            </div>
            <button onClick={() => setIsActive(!isActive)} className="description-button">{!isActive? "See Description" : "Hide Description"}
             <i className={`fa-solid description-arrow ${isActive ? 'fa-angle-up active-arrow' : 'fa-angle-down'}`}></i>
            </button>
            <a className="resume-link" target="_blank" href={project.linkToCode}>View Code</a>
         </div>
     </article>
   )
}