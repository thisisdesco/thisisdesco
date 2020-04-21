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
            <Col sm={6} lg={4} className="mr-5">
                <h1 className="display-6 mb-1">Stay in the loop!</h1>
                <p className="lead text-white footer-text">{footerText}</p>
                <input type="text" className="form-control" placeholder="yourname@example.com"></input>
                <br/>
                <Button variant="outline-light">Sign Up</Button>
                <p>{disclaimer}</p>
            </Col>
        </Row>
    </Container>
    );
}

export default Footer