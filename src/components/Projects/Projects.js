import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Wedding from "../../Assets/Projects/wedding.jpg";
import car from "../../Assets/Projects/Car.png";
import travel from '../../Assets/Projects/tervel.png'
import Quiz from "../../Assets/Projects/Quiz.jpeg";
import Login from "../../Assets/Projects/login.jpg";
import Punch from "../../Assets/Projects/Punch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wedding}
              isBlog={false}
              title="Wedding_Planning"
              description="A wedding planning website helps couples organize their wedding by offering tools for managing tasks, budgets, and guest lists, along with inspiration and vendor recommendations. It streamlines the planning process for a stress-free experience.."
              ghLink="https://github.com/Devendrnagar/Weddding_Planning.git"
              demoLink=" weddding-planning.vercel.app
              Resources
              "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Rental car service"
              description="A rental car service website lets users easily search for, compare, and book rental cars online. It offers a variety of vehicles, provides details on pricing and availability, and allows users to filter by location, date, and car type. The site simplifies the booking process, making it quick and convenient to find the perfect car for your needs.."
              ghLink="git@github.com:Devendrnagar/Car_booking_web.git"
              demoLink="car-booking-web-phi.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel-Project "
              description="A travel planning website helps users organize their trips by providing tools to search for flights, accommodations, and activities. It offers itinerary management, travel guides, and booking options all in one place, making trip planning easy and convenient"
              ghLink="https://github.com/Devendrnagar/Travel-Project.git"
              demoLink=" travel-project-ruddy.vercel.app "              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Punch}
              isBlog={false}
              title="Punch_In-Out_API"
              description="A Punch-In/Out API enables employees to clock in and out, tracking work hours and storing attendance data for accurate timekeeping and payroll integration."
              ghLink="https://github.com/Devendrnagar/Punch"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Login}
              isBlog={false}
              title="Register/Login-api"
              description="A Register/Login API manages user accounts by handling registration, login, and password management securely, with features like email verification and encryption."
              ghLink="git@github.com:Devendrnagar/register-api-backend.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz}
              isBlog={false}
              title="Quiz-Appliction"
              description="A quiz application allows users to take and create quizzes on various topics. It offers features for answering questions, scoring, and tracking progress. Users can view results and review answers, making it a tool for learning and assessment."
              ghLink="https://github.com/Devendrnagar/Quiz"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
