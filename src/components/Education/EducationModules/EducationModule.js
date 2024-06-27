import "../EducationModules/EducationModule.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function EducationModule({module}){
    return(
    <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={2} delay={200 + module.index}>
      <article className="module-card">
            <h2 className="module-title">{module.name}</h2>
            <a href={module.certificate}>Certificate</a>
     </article>
     </ScrollAnimation>
    )
}