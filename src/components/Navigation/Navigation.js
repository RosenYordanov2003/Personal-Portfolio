import "../Navigation/Navigation.css";

export default function Navigation(){
   
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
      </header>
    )
}