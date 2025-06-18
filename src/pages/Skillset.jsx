import React from "react";
import { Container } from "react-bootstrap";
import ClickSpark from '../components/ClickSpark';
import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
// import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
     <ClickSpark
    sparkColor='#fff'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
  >
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
    </ClickSpark>
  )
}

export default Skillset