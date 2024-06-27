import EducationModule from "../EducationModules/EducationModule"
import "./EducationTimeline.css";
import "./EducationTimelineResponsive.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function EducationCard({educationObject}){

    const modulesLiElements = educationObject.modules.map((x, index) => <EducationModule key={index} module={x} delay={index}/>)

   return(
    <ScrollAnimation animateIn="animated-container" animateOnce={true} duration={2} delay={1000}>
      <section className="education-timeline-container">
          {modulesLiElements}
      </section>  
    </ScrollAnimation>
   )
}