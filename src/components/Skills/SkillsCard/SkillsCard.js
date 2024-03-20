import "../SkillsCard/SkillsCard.css";

export default function SkillsCard({skillsArray, title}){
     const skills = skillsArray.map((skill, index) => {
         return <div className="skill-container" key={index}>
             <img className="skill-logo" src={skill.logoUrl}/>
             <p className="skill-name">{skill.name}</p>
         </div>
     });
     return(
        <>
         <article className="skill-card">
            <h1 className="skill-title">{title}</h1>
            <section className="skills">
                {skills}
            </section>
        </article>
        </>
       
    )
}