import React from 'react';
import Button from 'react-bootstrap/Button';
import TextareaAutosize from 'react-autosize-textarea';
import Col from 'react-bootstrap/Col';




const ContactForm = () => {
    const footerText = "Send us your message below and we'll get back to you as soon as we can!";
    const disclaimer = "* DESCO respects your privacy and will never share your email without your permission."

    return(
        <Col sm={6} lg={4} className="mr-5">
                <h1 className="display-6 mb-1 text-white">Contact Us!</h1>
                <p className="lead text-white footer-text">{footerText}</p>
                <input type="text" id="email" className="form-control" placeholder="Email"></input>
                <TextareaAutosize className="form-control text-area" placeholder="Your Message"></TextareaAutosize>
                <br/>
                <Button variant="outline-light">Send</Button>
                <p className="disclaimer text-white mt-3">{disclaimer}</p>
        </Col>
    );
}