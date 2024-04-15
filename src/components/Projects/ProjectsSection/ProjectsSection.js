import "../ProjectsSection/ProjectsSection.css";
import "../ProjectsSection/ProjectSectionResponsive.css";
import ProjectCard from "../ProjectCard/ProjectCard";
export default function ProjectsSection(){

    const bookingProject = {
        title: 'Booking System',
        duration: 'Jun 2023 - Aug 2023',
        technologies: ['C#', 'ASP.NET (MVC)', 'Entity Framework Core', 'Microsoft SQL Server', 'JavaScript', 'Html', 'CSS', 'NUnit','Moq', 'AJAX', 'Git'],
        description: 'Developed a Fully Responsive application with ASP.NET Core MVC pattern. the app allows users to book rooms in hotels of their choice. The app also allows the user to rent a car. Every user can see on the map where is the hotel/car and can see the distance between him and the hotel/car. Users can customize their profiles and uploading profile-img. The project supports all CRUD operations, Error Handling, Caching, Data Validation and work with Leaflet API for map usе.The application has Admin panel where are supported all CRUD operations about hotels, cars, rooms, hotel-benefits and room-bases.In Admin panel also have Dashboard which shows the total income and all users in application and their reservations. Admin panel also supports a dark mode. Admin users can change the role on the users (Moderator/User Role) Users with Moderator role can access the admin panel, but can not change user roles',
        imgUrl: '/BookingProjectHome.png',
        linkToCode: 'https://github.com/RosenYordanov2003/BookingWebProject'
    };
    const ecommerceProject = {
      title: 'E-commerce App',
      duration: 'October 2024 - Now',
      technologies: ['C#', 'ASP.NET (Web Api)', 'Entity Framework Core', 'Microsoft SQL Server', 'React JS', 'CSS', 'NUnit', 'AJAX', 'Git', 'SignalR', 'Smtp Client'],
      description: 'Developed a fully responsive E-commerce application with ASP.NET Web Api and React JS. The application allows users to filter products by brands or categories and search products by particular query string. Every user has a list with favorite products and user cart.If user reaches particular orders-count unique promotion code is sent by email to him. Users also can write reviews about products and can edit them. The application has Admin panel where are supported all CRUD operations about products.In Admin panel also have Dashboard which shows the total income, the total income percentage for particular month, day. Admin Dashboard is updated dynamically by using SignalR.The project supports Authentication (JWT, Refresh token) Data Validation (on server side and client side), good design and a dark mode',
      imgUrl: '/EcommerceApp.png',
      linkToCode: 'https://github.com/RosenYordanov2003/EcommerceApp'
    };
    const movieAppProject = {
        title: 'MovieApp',
        duration: 'April 2024 - Now',
        technologies: ['React', 'moviedb API', 'React-Router', 'GIT', 'CSS3'],
        description: 'The application discover the latest blockbusters and trending TV shows, search for specific titles, and delve into detailed information for each movie or series. Watch trailers directly within the app and explore the cast of your favorite productions. Enhanced user experience with lazy loading and blur effects for seamless browsing',
        linkToCode: 'https://github.com/RosenYordanov2003/MovieApp',
        imgUrl: '/MovieApp.png',
        demo: 'https://moviesforyou-89d0a.web.app/?fbclid=IwAR2619VnePgwhEcD1ArhILcLJQAmR-Sy7GqpdN86JBhAkwOrkGyki14ouX4_aem_AcYyJXYvKbJ5RzP7spDnjPCuwfllIy54lW9p0rbbCuGM54cTgWy1e2oqmOaVNg4y1iL7RQmjWwnYHrF7D9LUzDPJ'
    };

   return(
      <section className="projects-section">
         <h1 className="projects-title">Projects</h1>
         <div className="projects-container">
             <ProjectCard project={bookingProject}/>
             <ProjectCard project={ecommerceProject}/>
             <ProjectCard project={movieAppProject}/>
         </div>
      </section>
   )
}