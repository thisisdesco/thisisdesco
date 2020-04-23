import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DescoLogo from './images/descoLogo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavigationBar = () => {
    return(
        
    <Container> 
        <Navbar expand="sm" variant="dark">
        <Navbar.Brand href="#home">
        <img
            src={DescoLogo}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="DESCO logo"
        />
        </Navbar.Brand>
        <Router>
            <Nav className="ml-auto linkfont">
                <Link className="nav-link" component={PastEvents} >Past Events</Link>
                <Link className="nav-link" href="#about">About</Link>
                <Link className="nav-link pr-3" href="#getInvolved">Get Involved</Link>
                <Button variant="outline-light">Contact</Button>
            </Nav>
        </Router>
        </Navbar>
    </Container>
    );
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
export const MyNavigationBar = NavigationBar;