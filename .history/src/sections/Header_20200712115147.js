import React, {Component, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DescoLogo from '../images/descoLogo.png';
import Modal from 'react-bootstrap/Modal';
import TextareaAutosize from 'react-autosize-textarea';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import * as emailjs from 'emailjs-com';
import { Link, animateScroll as scroll } from "react-scroll";


export const ContactForm = () => {
    let contactText = "Send us your message below and we'll get back to you as soon as we can!";
    let disclaimer = "* DESCO respects your privacy and will never share your info without your permission."
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [buttonText, setButtonText] = useState('Send it!');
    const [buttonColor, setButtonColor] = useState('outline-info')

    const handleSetName = (e) => {
        setName(e.target.value);
    }
    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSetMessage = (e) => {
        setMessage(e.target.value);
    }

    

    const submitForm = (e) => {
        e.preventDefault();
        let templateParams= {
            senderName: name,
            senderEmail: email,
            senderMessage: message
        }

        emailjs.send(
            // 'gmail',
            // 'template_LPT4DwVi',
            // templateParams,
            // 'user_gDmbitL08aVbHwdMtqF7M'
        ).then(function(response) {
            setButtonText('Success!')
        }, function(error) {
           console.log('error');
           setButtonText("Uh oh, it looks like something went wrong. You can also contact us at: thisisdesco@gmail.com")
           setButtonColor('outline-danger')
        });
    }

    

    return(
        <InputGroup>
        <Col>
                <p className="lead footer-text">{contactText}</p>
                <input type="text" id="name" className="form-control mb-2" placeholder="Name" onChange={handleSetName}></input>
                <input type="text" id="email" className="form-control" placeholder="Email" onChange={handleSetEmail} required></input>
                <TextareaAutosize className="form-control text-area" placeholder="Your Message" required onChange={handleSetMessage}></TextareaAutosize>
                <br/>
                <Button type="submit" variant={buttonColor} onClick={submitForm}>{buttonText}</Button>
                <p className="disclaimer mt-3">{disclaimer}</p>
        </Col>
        </InputGroup>
    );
}

const NavigationBar = () => {
        const  [show, setShow] = useState(false); 
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
  
        

        return(
        <Container>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="custom">
                <Navbar.Brand href="#home">
                <img
                    src={DescoLogo}
                    width="100"
                    height="100"
                    className="d-inline-block align-top"
                    alt="DESCO logo"
                />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ml-auto">
                <Nav className="ml-auto linkfont nav-center">
                    <Link activeClass="active" to="events" spy={true} smooth={true} offset={-70} duration={500}>Events</Link>
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                    <Nav.Link href="https://anchor.fm/sac-desco" target="_blank">Podcast</Nav.Link>
                    <Link activeClass="active" to="getInvolved" spy={true} smooth={true} offset={-70} duration={500}>Get Involved</Link>
                    <Button className="ml-2 navbar-button" variant="outline-light" onClick={handleShow}>Contact</Button>
                    <Modal show={show} onHide={handleClose} centered> 
                        <Modal.Header closeButton>
                            <h1 className="display-6 ml-3 mt-2">Contact Us!</h1>
                        </Modal.Header>
                        <Modal.Body closeButton>
                            <ContactForm/>
                        </Modal.Body>
                    </Modal>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </Container>
        );
}

class Header extends Component {
    render(){
        const headlineContainer = {
            maxWidth: '700px'
        }

        return(
            <div className="bg-custom">
            {/* Navbar */}
            <NavigationBar />
            {/* Jumbotron */}
            <Jumbotron fluid>
                <Container className="text-md-center text-lg-left py-5 my-custom headline-container" style={headlineContainer}>
                    <p className="jumbo-text">DESCO is An Educational Design Community in Sacramento</p>
                    <Button href="#getInvolved" variant="info">Get Involved</Button>
                </Container>
            </Jumbotron>
      </div>
        );
    }
}

export default Header
export {NavigationBar}