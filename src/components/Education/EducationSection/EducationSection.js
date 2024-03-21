import "../EducationSection/EducationSection.css";
export default function EducationSection(){
   return(
     <section className="education-section">
         <h1 className="education-title">Education</h1>
         <div className="education-container">
             <div className="education-institution">
                 <div className="education-institution-img-container">
                     <div className="education-logo-container">
                         <img src="/SoftUniLogo.png"/>
                     </div>
                     <h4 className="education-institution-title">Software University</h4>
                 </div>
                 <p className="education-grade">Grade: 6.00</p>
                 <p className="education-institution-description">
                    SoftUni's software engineering professional program to upgrade all the fundamental knowledge and practical skills necessary 
                    to acquire the profession "software engineer goals", working with the most modern software technologies and learning the best practices in the field of programming.
                    The curriculum consists of several professional areas and further specializations, built from specially selected training modules. Each training   
                    module contains courses with a strong focus on practice, and at the end of each course, students pass a practical exam, demonstrating the acquired skills.
                 </p>
                 <ul className="education-modules">
                    <h3 className="modules-title">Passed Modules</h3>
                    <li><a href="/Certificates/DataStructuresAdvancedCertificate.jfif">Data Structures Advanced</a></li>
                    <li><a href="/Certificates/DataStructuresFundamentalsCertificate.jfif">Data Structures Fundamentals</a></li>
                    <li><a href="/Certificates/ASP.NETAdvancedCertificate.jfif">ASP.NET Advanced</a></li>
                    <li><a href="/Certificates/ASP.NETFundamentalsCertificate.jfif">ASP.NET Fundamentals</a></li>
                    <li><a href="/Certificates/JSFrontendCertificate.jfif">JavaScript Frontend</a></li>
                    <li><a href="/Certificates/HTMLCSSCertificate.jfif">HTML && CSS</a></li>
                    <li><a href="/Certificates/CSharpOOPCertificate.jfif">C# OOP</a></li>
                    <li><a href="/Certificates/CSharpAdvancedCertificate.jfif">C# Advanced</a></li>
                    <li><a href="/Certificates/CSharpFundamentalsCertificate.jfif">C# Fundamentals</a></li>
                    <li><a href="/Certificates/CSharpBasicsCertificate.jfif">C# Basics</a></li>
                 </ul>
             </div>
         </div>
     </section>
   )
}