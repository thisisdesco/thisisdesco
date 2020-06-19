import React, {Component, useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DescoLogo from './images/descoLogo.png';
import Modal from 'react-bootstrap/Modal';
import TextareaAutosize from 'react-autosize-textarea';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';


const ContactForm = () => {
    const contactText = "Send us your message below and we'll get back to you as soon as we can!";
    const disclaimer = "* DESCO respects your privacy and will never share your email without your permission."
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    
    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSetEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleSetMessage = (e) => {
        setMessage(e.target.value);
    }


    const submitForm = () => console.log(email, message)


    return(
        <InputGroup>
        <Col>
                <p className="lead footer-text">{contactText}</p>
                <input type="text" id="name" className="form-control" placeholder="Name" onChange={handleSetName}></input>
                <input type="text" id="email" className="form-control" placeholder="Email" onChange={handleSetEmail} required></input>
                <TextareaAutosize className="form-control text-area" placeholder="Your Message" required onChange={handleSetMessage}></TextareaAutosize>
                <br/>
                <Button type="submit" variant="outline-info" onClick={submitForm}>Send it!</Button>
                <p className="disclaimer text-white mt-3">{disclaimer}</p>
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
                <Nav className="ml-auto linkfont">
                    <Nav.Link href="#events">Events</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#getInvolved">Get Involved</Nav.Link>
                    <Button className="ml-2" variant="outline-light" onClick={handleShow}>Contact</Button>
                    <Modal show={show} onHide={handleClose}> 
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
            backgroundColor: 'white',
            color: '#2f2f3f',
            fontFamily: 'Bebas Neue, cursive',
            marginRight: '0',
            maxWidth: '700px',
            padding: '50px'
        }

        const headlineText = {
            color: '#2f2f3f',
            fontSize: '3.5rem',
            fontWeight: '300',
            lineHeight: '1.2'
        }


        return(
            <div className="bg-custom">
            {/* Navbar */}
            <NavigationBar />
            {/* Jumbotron */}
            <Jumbotron fluid>
                <Container className="text-md-center text-lg-left py-5 my-custom" style={headlineContainer}>
                    <p style={headlineText}>An Educational Design Community in Sacramento</p>
                    <Button href="#getInvolved" variant="info">Get Involved</Button>
                </Container>
            </Jumbotron>
      </div>
        );
    }
}

export default Header
export {NavigationBar}