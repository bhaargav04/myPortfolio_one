import React from 'react';
import '../style.css';
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import ClickSpark from '../components/ClickSpark';


const Contact = () => {
  return (
     <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
    <div id='c-s'// Change from Container to div
      
    >
      <Particle />
      <Container fluid className="contact-section" style={{ padding: '20px' }}>
        <ContactForm />
        <Social />
      </Container>
    </div>
    </ClickSpark>
  );
};

export default Contact;
