import "../HeroSection/HeroSection.css";
import "../HeroSection/HeroSectionResponsive.css";
import Pdf from "../../documents/Cv.pdf";
// import Pdf from "../../documents/RosenCV.pdf";

export default function HeroSection(){
   return(
     <section className="hero-section">
          <div className="about-me-container">
             <h1 className="hero-section-title">Hi, I'am</h1>
             <h1 className="hero-section-title">Rosen Yordanov</h1>
             <p className="about-me-description">
              I'm  20 years old from Sofia, Bulgaria. I am highly motivated person who wants to learn new things
              every day, with passion to provide high-quality code with the best practices and an attention to details.
              In the last 2 years I have been studying very hard programming specifically C# and frameworks related with C# and Web Development such as ASP.NET Core and Entity Framework Core.
            </p>
            <a href={Pdf} target="_blank" className="resume-link">Check Resume</a> 
          </div>
          <div className="img-container">
             <img src="/ProfilePicture.png"/> 
          </div>
     </section>
   )
}