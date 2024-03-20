import "../ProjectCard/ProjectCard.css";

export default function ProjectCard({project}){

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
            <p className="project-description">{project.description}</p>
            <a className="resume-link" target="_blank" href={project.linkToCode}>View Code</a>
         </div>
     </article>
   )
}