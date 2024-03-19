import "../HeroSection/HeroSection.css";
import Pdf from "../../documents/Cv.pdf";

export default function HeroSection(){
   return(
     <section className="hero-section">
          <div className="about-me-container">
             <h1 className="hero-section-title">Hi, I'am</h1>
             <h1 className="hero-section-title">Rosen Yordanov</h1>
             <p className="about-me-description">
              I'm  20 years old from Sofia, Bulgaria. I am highly motivated person who wants to learn new things
              every day, with passion to provide high-quality code with the best practices. Also i have an attention to details.
            </p>
            <a href={Pdf} target="_blank" className="resume-link">Check Resume</a> 
          </div>
          <div className="img-container">
             <img src="/ProfilePicture.png"/> 
          </div>
     </section>
   )
}