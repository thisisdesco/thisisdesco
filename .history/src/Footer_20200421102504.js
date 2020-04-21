import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import descoWordmark from './images/DESCO_Wordmark.svg';
import Button from 'react-bootstrap/Button';


const Footer = () => {
    const footerText = "Enter your email below to sign up for our newsletter and never miss an event!";
    const disclaimer = "* DESCO respects your privacy and will never share your email without your permission."
    return(
    <Container fluid className="bg-custom">
        <Row className="pt-4 mx-5 d-lg-flex d-sm-block justify-content-center">
            <Col lg={3} className="text-white mt-5 ml-5">
                <Image src={descoWordmark} alt="DESCO Wordmark" className="footer-brand-img"/>
            </Col>
            {/* Newsletter sign-up */}
            <Col sm={6} lg={4} className="mr-5">
                <h1 className="display-6 mb-1">Stay in the loop!</h1>
                <p className="lead text-white footer-text">{footerText}</p>
                <input type="text" className="form-control" placeholder="yourname@example.com"></input>
                <br/>
                <Button variant="outline-light">Sign Up</Button>
                <p className="disclaimer text-white mt-3">{disclaimer}</p>
            </Col>
            {/* Find us Online */}
            <Col sm={4} lg={3} className="text-white ml-5 mr-0 pb-4">
                <h1 className="mb-1">Find us online</h1>
                {/* Social Icons and Links */}
                <a href="https://www.facebook.com/sacdesco" target="_blank"><Image src="./images/facebook_icon.svg" alt="facebook icon"></a>
                <a href="https://www.instagram.com/sacdesco/" target="_blank"><img src="./images/ig_icon.svg" alt="instagram icon"></a>
                <a href="https://www.linkedin.com/company/sacdesco" target="_blank"><img src="./images/linkedin_icon.svg" alt="linkedin icon"></a>
                <a href="https://sac-desco.slack.com" target="_blank"><img src="images/slack_icon.svg" alt="slack icon"></a>
                <h1 class="mb-0">quick links</h1>
                <div class="container pl-0">
                    <a href="#about" class="linkfont text-white">About</a> <br>
                    <a href="#about" class="linkfont text-white">Sponsor</a> <br>
                    <a href="#about" class="linkfont text-white">Volunteer</a><br>
                    <a href="#about" class="linkfont text-white">Donate</a><br>
                    <a href="#about" class="linkfont text-white">Contact</a>
                </div>
            </Col>
        </Row>
    </Container>
    );
}

export default Footer