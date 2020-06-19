import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DescoLogo from './images/descoLogo.png';
import Modal from 'react-bootstrap/Modal';


const ContactModal = () => {
    <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
    </Modal>
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