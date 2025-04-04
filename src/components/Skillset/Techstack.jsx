import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiJava } from "react-icons/di";
import { SiPython, SiMongodb, SiHtml5, SiBootstrap, SiCss3 } from "react-icons/si";

const techStackData = [
  { icon: <SiHtml5 />, title: "HTML5" },
  { icon: <SiCss3 />, title: "CSS3" },
  { icon: <DiJavascript1 />, title: "JavaScript" },
  { icon: <DiNodejs />, title: "Node.js" },
  { icon: <DiReact />, title: "React.js" },
  { icon: <SiBootstrap />, title: "Bootstrap" },
  { icon: <SiMongodb />, title: "MongoDB" },
  { icon: <SiPython />, title: "Python" },
  { icon: <DiJava />, title: "Java" },
];

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStackData.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} title={tech.title}>
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
};

export default Techstack;
