import Navigation from "../src/components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import SkillsSection from "./components/Skills/SkillsSection/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection/ProjectsSection";
import EducationSection from "./components/Education/EducationSection/EducationSection";
function App() {
  return (
    <>
     <Navigation/>
     <HeroSection/>
     <SkillsSection/>
     <ProjectsSection/>
     <EducationSection/>
    </>
  );
}

export default App;
