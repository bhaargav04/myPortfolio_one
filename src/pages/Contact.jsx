import React from 'react';
import '../style.css';
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';


const Contact = () => {
  return (
    <div id='c-s'// Change from Container to div
      
    >
      <Particle />
      <Container fluid className="contact-section" style={{ padding: '20px' }}>
        <ContactForm />
        <Social />
      </Container>
    </div>
  );
};

export default Contact;
