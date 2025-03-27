import React, { useState, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css';
import bgImage from '../../assets/home3.jpg';
import ShinyText from '../ShinyText';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
            return;
        }

        emailjs
            .sendForm(
                "service_nvf3nrk",   // Your EmailJS service ID
                "template_x5gjcbw",  // Your EmailJS template ID
                form.current,
                "MYqauP_j2_S-uC2PU"  // Your EmailJS public key
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    setDone(true);
                    setNotDone(false);
                    
                    // Reset success message after 5 seconds
                    setTimeout(() => setDone(false), 5000);
                    
                    // Clear input fields
                    setFormData({});
                    form.current.reset();
                },
                (error) => {
                    console.log("Email sending error:", error.text);
                    setNotDone(true);
                }
            );
    };

    return (
        <Container className="contact-container" style={{ width: '100vw' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact Me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="hidden" name="to_email" value="your-email@example.com" />
                        <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} required />
                        <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} required />
                        <textarea name="message" className="user" placeholder="Message" onChange={handleChange} required />
                        
                        <span className='not-done'>{notDone && "Please fill all the fields correctly."}</span>
                        
                        <Button type="submit" className="button" disabled={done}>
                            <ShinyText text="Send" disabled={false} speed={3} className='custom-class' />
                        </Button>
                        
                        <span className='done'>{done && "Thanks for contacting me! I have received your mail."}</span>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
