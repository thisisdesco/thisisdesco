import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
//import Image from 'react-bootstrap/Image';

class Body extends Component{
    render(){
        return(
            <div className="bg-custom">
                <Container> 
                    <Navbar expand="sm" variant="dark">
                    <Navbar.Brand href="#home">
                        Sac DESCO
                    </Navbar.Brand>
                    <Nav className="ml-auto linkfont">
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#getInvolved">Get Involved</Nav.Link>
                        <Button variant="outline-light">Contact</Button>
                    </Nav>
                    </Navbar>
                </Container>
                <Jumbotron fluid>
                    <div className="container text-center py-5 my-custom">
                        <h1 className="display-4">Envisioning an educational design community in Sacramento for all</h1>
                        <Button variant="outline-light">Get Involved</Button>
                    </div>
                </Jumbotron>
          </div>
        );
    }
}
export default Body