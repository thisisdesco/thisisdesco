import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DescoLogo from './images/descoLogo.png';


class NavigationBar extends Component {
    render(){
        return(
        <Container> 
            <Navbar expand="sm" variant="custom">
            <Navbar.Brand href="#home">
            <img
                src={DescoLogo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="DESCO logo"
            />
            </Navbar.Brand>
            <Nav className="ml-auto linkfont">
                <Nav.Link href="#events">Events</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#getInvolved">Get Involved</Nav.Link>
                <Button className="ml-2" variant="outline-light">Contact</Button>
            </Nav>
            </Navbar>
        </Container>
        );
    }
}

class Header extends Component {
    render(){
        return(
            <div className="bg-custom">
            {/* Navbar */}
            <NavigationBar />
            {/* Jumbotron */}
            <Jumbotron fluid>
                <Container className="text-center py-5 my-custom">
                    <h1 className="display-4">Envisioning an educational design community in Sacramento for all</h1>
                    <Button href="#getInvolved" variant="outline-light">Get Involved</Button>
                </Container>
            </Jumbotron>
      </div>
        );
    }
}

export default Header
export {NavigationBar}