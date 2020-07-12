import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import descoWordmark from './images/DESCO_Wordmark.svg';
import Button from 'react-bootstrap/Button';
import fbIcon from '../images/facebook_icon.svg';
import igIcon from '../images/ig_icon.svg';
import linkedinIcon from './images/linkedin_icon.svg';
import slackIcon from './images/slack_icon.svg';
import {ContactForm} from './Header';
import Modal from 'react-bootstrap/Modal';



const AltFooter = () => {

    
    // LINKS AND TEXT -- CHANGE TEXT AS NECESSARY
    const fbLink="https://www.facebook.com/sacdesco";
    const igLink="https://www.instagram.com/sacdesco/";
    const linkedinLink="https://www.linkedin.com/company/sacdesco";
    const slackLink = "https://sac-desco.slack.com";

    const  [show, setShow] = useState(false); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
    <Container fluid className="bg-footer py-4">
        <Row className="pt-4 mb-1 mx-5 d-lg-flex d-sm-block justify-content-center">
                <h4 className="text-center text-white">Find us online</h4>
        </Row>
        <Row className="justify-content-center pb-4">
            {/* SOCIAL ICONS AND LINKS */}
            <a href={igLink} target="_blank"><Image className="mx-1 social-icon" src={igIcon} alt="instagram icon" /></a>
            <a href={fbLink} target="_blank"><Image className="mx-1 social-icon" src={fbIcon} alt="facebook icon" /></a>
            <a href={linkedinLink} target="_blank"><Image className="mx-1 social-icon" src={linkedinIcon} alt="linkedin icon" /></a>
            <a href={slackLink} target="_blank"><Image className="mx-1 social-icon" src={slackIcon} alt="slack icon" /></a>
        </Row>
        <Row className="justify-content-center pb-5">
            <Button variant="outline-light" onClick={handleShow}>Contact Us</Button>
            <Modal show={show} onHide={handleClose} centered> 
                <Modal.Header closeButton>
                    <h1 className="display-6 ml-3 mt-2">Contact Us!</h1>
                </Modal.Header>
                <Modal.Body closeButton>
                    <ContactForm/>
                </Modal.Body>
            </Modal>
        </Row>
        <Row className="justify-content-center">
            <p className="text-white disclaimer">© Copyright DESCO 2020, All Rights Reserved</p>
        </Row>
    </Container>
    );
}

export default AltFooter