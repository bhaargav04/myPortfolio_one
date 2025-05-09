import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import trafficlights from "../assets/projects/trafficlights.jpg";
import timetable from "../assets/projects/timetable.jpg";
import weather from "../assets/projects/weather.png";
import marvel from "../assets/projects/marvel.jpg";
import handCricket from "../assets/projects/handCricket.jpg";
import playstore from "../assets/projects/playstore.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="My weather forecast project is a sleek and responsive web application built with React.js, providing real-time weather updates for any location. With a clean and intuitive interface, users can effortlessly check current conditions, temperature, humidity, wind speed, and future forecasts. The app fetches data from a weather API, ensuring accurate and up-to-date information. Designed with a visually appealing layout and smooth user experience, this project showcases my front-end development skills while offering a practical tool for everyday weather tracking."
              ghLink="https://github.com/bhaargav04/WeatherApp"
              demoLink="https://weatherforecast-bhaargav.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timetable}
              isBlog={false}
              title="Time Table Scheduler"
              description="My timetable scheduler is a dynamic web application designed to simplify staff and subject allocation while ensuring an organized weekly schedule. Built using EJS, Node.js, Express.js, and MongoDB, it enables administrators to assign subjects to staff with customizable constraints, such as maximum weekly classes and mandatory free periods. The system intelligently generates a structured timetable in a grid format, balancing workloads and preventing conflicts. With an intuitive interface and PDF export functionality, this scheduler enhances efficiency in academic planning, making timetable management seamless and hassle-free."
              ghLink="https://github.com/bhaargav04/Timetable-frontend"
              demoLink="https://smart-time-table-scheduler.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playstore}
              isBlog={false}
              title="Play Store Replica"
              description="My Play Store replica website is a fully responsive web application designed to mimic the functionality and aesthetics of the official Play Store. Built with modern front-end technologies, it features a dynamic interface where users can browse, search, and explore various apps categorized by genres. The design prioritizes smooth navigation, interactive UI elements, and a seamless user experience. This project highlights my ability to create visually appealing and functional web applications that replicate real-world platforms with precision and efficiency."
              ghLink="https://github.com/bhaargav04/Playstore_replica"
              demoLink="https://playstore-replica.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trafficlights}
              isBlog={false}
              title="Traffic Light"
              description="My traffic light project is a Python-based simulation that visually represents the functioning of a standard traffic light system. Using graphical libraries, it cycles through red, yellow, and green lights with realistic timing intervals, demonstrating an essential aspect of traffic control. This project showcases my ability to implement logical sequencing and visual representation in Python, making it an engaging demonstration of real-world automation concepts."
              ghLink="https://github.com/bhaargav04/Traffic-ligths.py"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marvel}
              isBlog={false}
              title="Webpage using Tailwind"
              description="My webpage built with Tailwind CSS showcases a modern, responsive, and visually appealing design with a utility-first approach. Leveraging Tailwind’s powerful styling capabilities, the page ensures a clean layout, fast performance, and seamless responsiveness across devices. With optimized styling and minimal custom CSS, this project highlights my proficiency in creating elegant and efficient web interfaces while maintaining flexibility for future scalability."
              ghLink="https://github.com/bhaargav04/avengers"
              demoLink="https://bhaargav04.neocities.org/BOOTSTRAP/first"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handCricket}
              isBlog={false}
              title="Hand Cricket"
              description="My hand cricket game is a Python-based interactive game that simulates the popular playground version of cricket played with hand gestures. The game allows users to bat and bowl against a computer opponent, following traditional hand cricket rules where matching numbers result in a wicket. Built with logical decision-making and user input handling, this project demonstrates my ability to develop engaging and interactive applications in Python while implementing game mechanics effectively."
              ghLink="https://github.com/bhaargav04/HandCricket"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects