import "../Footer/Footer.css";
import "../Footer/FooterResponsive.css";

export default function Footer(){
    
    function navigate(sectionName){
        const element = document.querySelector(sectionName);
        element.scrollIntoView({ behavior: 'smooth'});
    }

    return(
        <footer>
            <ul className="footer-list">
                <li onClick={() => navigate('.hero-section')}><a className="footer-link">About</a></li>
                <li onClick={() => navigate('.skills-section')}><a className="footer-link">Skills</a></li>
                <li onClick={() => navigate('.projects-section')}><a className="footer-link">Projects</a></li>
                <li onClick={() => navigate('.education-section')}><a className="footer-link">Education</a></li>
            </ul>
            <ul className="footer-social-list">
                <li><a href="https://www.linkedin.com/in/rosen-yordanov-4a3b27262/" target="_blank" className="footer-link"><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/roskata777/" target="_blank" className="footer-link"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://github.com/RosenYordanov2003" target="_blank" className="footer-link"><i className="fa-brands fa-github"></i></a></li>
            </ul>
        </footer>
    )
}