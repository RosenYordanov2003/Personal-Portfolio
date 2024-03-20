import SkillsCard from "../SkillsCard/SkillsCard";
import "../SkillsSection/SkillsSection.css";

export default function SkillsSection(){
    const frontendSkills = [
        {
            name: 'JavaScript',
            logoUrl: '/JSLogo.png'
        },
        {
            name: 'React JS',
            logoUrl: '/ReactLogo.png'
        },
        {
            name: 'HTML',
            logoUrl: '/HTML5Logo.png'
        },
        {
            name: 'CSS',
            logoUrl: '/CSS3Logo.png'
        },
    ]

    const backendSkills = [
        {
            name: 'C#',
            logoUrl: '/CSharpLogo.png'
        },
        {
            name: 'ASP.NET Core',
            logoUrl: '/ASP.NETLogo.png'
        },
        {
            name: 'MS SQL',
            logoUrl: '/MSSQLLogo.png'
        },
        {
            name: 'Entity Framework Core',
            logoUrl: '/ASP.NETLogo.png'
        },
    ]
    const otherSkills = [
        {
            name: 'Git',
            logoUrl: '/Git.png'
        },
        {
            name: 'Github',
            logoUrl: '/Github.png'
        },
        {
            name: 'Postman',
            logoUrl: '/Postman.png'
        },
        {
            name: 'VS Code',
            logoUrl: '/VS Code.png'
        },
        {
            name: 'Visual studio',
            logoUrl: '/VisualStudio.png'
        },
    ]
    
    return(
        <section className="skills-section">
            <SkillsCard skillsArray={frontendSkills} title='Frontend'/>
            <SkillsCard skillsArray={backendSkills} title='Backend'/>
            <SkillsCard skillsArray={otherSkills} title='Others'/>
        </section>
    )
}

