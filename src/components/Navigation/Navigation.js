import "../Navigation/Navigation.css";
import "../Navigation/NavigationResponsive.css";
import { useState, useEffect } from "react";

export default function Navigation(){

  const [isOpen, setIsOpen] = useState(false);
   
  function navigate(sectionName){
    const element = document.querySelector(sectionName);

    element.scrollIntoView({ behavior: 'smooth' });
  }

    return(
      <header className="nav-container">
        <nav>
            <ul className="navigation">
                <li onClick={() => navigate('.hero-section')}>About</li>
                <li onClick={() => navigate('.skills-section')}>Skills</li>
                <li onClick={() => navigate('.projects-section')}>Projects</li>
                <li onClick={() => navigate('.education-section')}>Education</li>
            </ul>
        </nav>
       <a className="github-button" href="https://github.com/RosenYordanov2003" target="_blank">Github</a>
       <div onClick={() => setIsOpen(!isOpen)} className={`menu-icon ${isOpen && 'open'}`}>
            <div className="first-bar menu-icon-bar"></div>
            <div className="second-bar menu-icon-bar"></div>
            <div className="third-bar menu-icon-bar"></div>
        </div>
      </header>
    )
}