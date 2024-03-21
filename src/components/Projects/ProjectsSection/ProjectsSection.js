import "../ProjectsSection/ProjectsSection.css";
import "../ProjectsSection/ProjectSectionResponsive.css";
import ProjectCard from "../ProjectCard/ProjectCard";
export default function ProjectsSection(){

    const bookingProject = {
        title: 'Booking System',
        duration: 'Jun 2023 - Aug 2023',
        technologies: ['C#', 'ASP.NET (MVC)', 'Entity Framework Core', 'Microsoft SQL Server', 'JavaScript', 'Html', 'CSS', 'NUnit','Moq', 'AJAX', 'Git'],
        description: 'Developed a Fully Responsive application with ASP.NET Core MVC pattern. the app allows users to book rooms in hotels of their choice. The app also allows the user to rent a car. Every user can see ont the map where is the hotel/car and can see the distance between him and the hotel/car.The project supports all CRUD operations, Error Handling, Data Validation and work with Leaflet API for map usе.The application has Admin panel where are supported all CRUD operations about hotels, cars, rooms, hotel-benefits and room-bases.In Admin panel also have Dashboard which shows the total income and all users in application and their reservations. Admin panel also supports a dark mode',
        imgUrl: '/BookingProjectHome.png',
        linkToCode: 'https://github.com/RosenYordanov2003/BookingWebProject'
    }
    const ecommerceProject = {
      title: 'E-commerce App ',
      duration: 'October 2023 - Now',
      technologies: ['C#', 'ASP.NET (Web Api)', 'Entity Framework Core', 'Microsoft SQL Server', 'React JS', 'CSS', 'NUnit', 'AJAX', 'Git', 'SignalR', 'Smtp Client'],
      description: 'Developed a fully responsive E-commerce application with ASP.NET Web Api and React JS. The application allows users to by, filter and search products. Every user has a list with favorite products and user cart.If user reaches particular orders-count unique promotion code is sent by email to him. Users also can write reviews about products and can edit them. The application has Admin panel where are supported all CRUD operations about products.In Admin panel also have Dashboard which shows the total income, the total income percentage for particular month, day. Admin Dashboard is updated dynamically by using SignalR.The project supports Authentication (JWT, Refresh token) Data Validation (on server side and client side), good design and a dark mode',
      imgUrl: '/EcommerceApp.png',
      linkToCode: 'https://github.com/RosenYordanov2003/EcommerceApp'
  }

   return(
      <section className="projects-section">
         <h1 className="projects-title">Projects</h1>
         <h3 className="projects-section-sub-title">
            I have worked on some web projects. Here are some of them
         </h3>
         <div className="projects-container">
             <ProjectCard project={bookingProject}/>
             <ProjectCard project={ecommerceProject}/>
         </div>
      </section>
   )
}