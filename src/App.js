import Navigation from "../src/components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import SkillsSection from "./components/Skills/SkillsSection/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection/ProjectsSection";
import EducationSection from "./components/Education/EducationSection/EducationSection";
import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect } from "react";


function App() {

  return (
    <>
     <Navigation/>
      <HeroSection/>
     <ScrollAnimation animateIn="fadeIn" duration={2} delay={200} animateOnce={true}>
      <SkillsSection/>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true} delay={200}>
      <ProjectsSection/>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true} delay={200}>
     <EducationSection/>
    </ScrollAnimation>
    </>
  );
}

export default App;
