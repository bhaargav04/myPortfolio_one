import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/laptop3.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import Tilt from "react-parallax-tilt";
import GradientText from '../components/GradientText';
import ClickSpark from '../components/ClickSpark';

const Home = () => {
  return (
     <ClickSpark
    sparkColor='#fff'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}
  >
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M &nbsp;<strong><GradientText> Bhaargav B</GradientText></strong>
              </h1>
              <div style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 30, paddingBottom: 70 ,vtextAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
    </ClickSpark>
  );
}

export default Home