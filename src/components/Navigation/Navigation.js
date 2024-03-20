import "../Navigation/Navigation.css";

export default function Navigation(){
    return(
      <header className="nav-container">
        <nav>
            <ul className="navigation">
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Education</li>
            </ul>
        </nav>
       <a className="github-button" href="https://github.com/RosenYordanov2003" target="_blank">Github</a>
      </header>
    )
}