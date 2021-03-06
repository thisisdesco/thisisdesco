import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import descoWordmark from './images/DESCO_Wordmark.svg';
import Button from 'react-bootstrap/Button';
import fbIcon from './images/facebook_icon.svg';
import igIcon from './images/ig_icon.svg';
import linkedinIcon from './images/linkedin_icon.svg';
import slackIcon from './images/slack_icon.svg';
import ContactForm from './ContactForm';


const Footer = () => {
    // LINKS AND TEXT -- CHANGE TEXT AS NECESSARY
    const footerText = "Send us your message below and we'll get back to you as soon as we can!";
    const disclaimer = "* DESCO respects your privacy and will never share your email without your permission."
    const fbLink="https://www.facebook.com/sacdesco";
    const igLink="https://www.instagram.com/sacdesco/";
    const linkedinLink="https://www.linkedin.com/company/sacdesco";
    const slackLink = "https://sac-desco.slack.com";

    return(
    <Container fluid className="bg-custom">
        <Row className="pt-4 mx-5 d-lg-flex d-sm-block justify-content-center">
            <Col lg={3} className="text-white mt-5 ml-5">
                <Image src={descoWordmark} alt="DESCO Wordmark" className="footer-brand-img"/>
            </Col>
            {/* NEWSLETTER SIGN UP */}
            <Col sm={6} lg={4} className="mr-5">
                <h1 className="display-6 mb-1 text-white">Contact Us!</h1>
                <p className="lead text-white footer-text">{footerText}</p>
                <input type="text" id="email" className="form-control" placeholder="Email"></input>
                <TextareaAutosize className="form-control text-area" placeholder="Your Message"></TextareaAutosize>
                <br/>
                <Button variant="outline-light">Send</Button>
                <p className="disclaimer text-white mt-3">{disclaimer}</p>
            </Col>
            <Col sm={4} lg={3} className="text-white ml-5 mr-0 pb-4">
                <h1 className="mb-1">Find us online</h1>
                {/* SOCIAL ICONS AND LINKS */}
                    <a href={igLink} target="_blank"><Image className="mx-1" src={igIcon} alt="instagram icon" /></a>
                    <a href={fbLink} target="_blank"><Image className="mx-1" src={fbIcon} alt="facebook icon" /></a>
                    <a href={linkedinLink} target="_blank"><Image className="mx-1" src={linkedinIcon} alt="linkedin icon" /></a>
                    <a href={slackLink} target="_blank"><Image className="mx-1" src={slackIcon} alt="slack icon" /></a>
            </Col>
        </Row>
    </Container>
    );
}

export default Footer