export default function EducationModule({module}){
    return(
        <li><a href={module.certificate}>{module.name}</a></li>
    )
}