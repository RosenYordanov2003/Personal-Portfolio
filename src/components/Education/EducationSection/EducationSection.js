import "../EducationSection/EducationSection.css";
import "../EducationSection/EducationSectionResponsive.css";
import EducationTimeline from "../EducationTimeline/EducationTimeline";
export default function EducationSection(){

    const softUniObject = {
        institutionTitle: 'Software University',
        grade: 6.00,
        institutionLogo: "/SoftUniLogo.png",
        institutionDescription: ' SoftUni software engineering professional program to upgrade all the fundamental knowledge and practical skills necessary to acquire the profession "software engineer goals", working with the most modern software technologies and learning the best practices in the field of programming.The curriculum consists of several professional areas and further specializations, built from specially selected training modules. Each training module contains courses with a strong focus on practice, and at the end of each course, students pass a practical exam, demonstrating the acquired skills.',
        modules: [
            {name: 'Data Structures Advanced', certificate: '/Certificates/DataStructuresAdvancedCertificate.jfif'},
            {name: 'Data Structures Fundamentals', certificate: '/Certificates/DataStructuresFundamentalsCertificate.jfif'},
            {name: 'ASP.NET Advanced', certificate: '/Certificates/ASP.NETAdvancedCertificate.jfif'},
            {name: 'ASP.NET Fundamentals', certificate: '/Certificates/ASP.NETFundamentalsCertificate.jfif'},
            {name: 'JavaScript Frontend', certificate: '/Certificates/JSFrontendCertificate.jfif'},
            {name: 'HTML && CSS', certificate: '/Certificates/HTMLCSSCertificate.jfif'},
            {name: 'C# OOP', certificate: '/Certificates/CSharpOOPCertificate.jfif'},
            {name: 'C# Advanced', certificate: '/Certificates/CSharpAdvancedCertificate.jfif'},
            {name: 'C# Fundamentals', certificate: '/Certificates/CSharpFundamentalsCertificate.jfif'},
            {name: 'C# Basics', certificate: '/Certificates/CSharpBasicsCertificate.jfif'},
            {name: 'Fundamentals In Mathematics', certificate: '/Certificates/MathFundCertificate.jfif'},
            {name: 'MS SQL', certificate: '/Certificates/MsSqlCert.jfif'}
        ]
    };

   return(
     <section className="education-section">
         <h1 className="education-title">Education</h1>
             <EducationTimeline educationObject={softUniObject}/>
     </section>
   )
}