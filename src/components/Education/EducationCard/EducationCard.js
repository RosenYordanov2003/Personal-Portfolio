import EducationModule from "../EducationModules/EducationModule"
import "../EducationCard/EducationCard.css";

export default function EducationCard({educationObject}){

    const modulesLiElements = educationObject.modules.map((x, index) => <EducationModule key={index} module={x}/>)

   return(
    <article className="education-institution">
    <div className="education-institution-img-container">
        <div className="education-logo-container">
            <img src={educationObject.institutionLogo}/>
        </div>
        <h4 className="education-institution-title">{educationObject.institutionTitle}</h4>
    </div>
    <p className="education-grade">Grade: {educationObject.grade.toFixed(2)}</p>
    <p className="education-institution-description">{educationObject.institutionDescription}</p>
    <ul className="education-modules">
       <h3 className="modules-title">Passed Modules</h3>
        {modulesLiElements}
    </ul>
    </article>
   )
}