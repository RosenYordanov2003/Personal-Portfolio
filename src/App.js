import Navigation from "../src/components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import SkillsSection from "./components/Skills/SkillsSection/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection/ProjectsSection";
import EducationSection from "./components/Education/EducationSection/EducationSection";
import ContactSection from "./components/Contact/ContactSection";
import Footer from "./components/Footer/Footer";
import ScrollAnimation from 'react-animate-on-scroll';


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
     <EducationSection/>
    <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true} delay={200}>
     <ContactSection/>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce={true} delay={200}>
     <Footer/>
    </ScrollAnimation>
    </>
  );
}

export default App;
