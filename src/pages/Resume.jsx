import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ClickSpark from '../components/ClickSpark';
import { AiOutlineDownload } from "react-icons/ai";

import Particle from "../components/Particle";
import pdf from "../assets/resume.pdf";  // Ensure this path is correct
import ShinyText from "../components/ShinyText";
import { Document, Page, pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/text-Layer.css";
// import "react-pdf/dist/esm/Annotation-layer.css";

// Correct way to set up pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "https://drive.google.com/uc?export=download&id=1AEaEB6EwhVG4wvo2pUhv9UcyzopfHD9C";
// https://drive.google.com/file/d/1AEaEB6EwhVG4wvo2pUhv9UcyzopfHD9C/view?usp=sharing
const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
     <ClickSpark
    sparkColor='#fff'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
  >
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 100 ? 1.3 : 1.2} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={resumeLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;<ShinyText text="Download Resume" disabled={false} speed={3} className='custom-class' />
          </Button>
        </Row>
      </Container>
    </div>
    </ClickSpark>
  );
};

export default Resume;
