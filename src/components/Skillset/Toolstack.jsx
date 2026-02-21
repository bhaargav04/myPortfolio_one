import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman, SiVercel, SiNetlify, SiRailway, SiRender, 
  SiAndroidstudio, SiNotepadplusplus, SiIntellijidea, SiPycharm
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { VscVscode } from "react-icons/vsc";

const toolStackData = [
  { icon: <VscVscode />, title: "VS Code" },
  { icon: <AiFillGithub />, title: "GitHub" },
  { icon: <SiPostman />, title: "Postman" },
  { icon: <SiVercel />, title: "Vercel" },
  { icon: <SiRender />, title: "Render" },
  { icon: <SiNetlify />, title: "Netlify" },
  { icon: <SiRailway />, title: "Railway" },
  { icon: <SiAndroidstudio />, title: "Android Studio" },
  { icon: <SiNotepadplusplus />, title: "Notepad++" },
  { icon: <SiIntellijidea />, title: "IntelliJ IDEA" },
  { icon: <SiPycharm />, title: "PyCharm" },
  
];

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStackData.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} title={tool.title}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
};

export default Toolstack;
