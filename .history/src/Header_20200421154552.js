import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import DescoLogo from './images/descoLogo.png';

const Navbar = () => {
    return();
}

class Header extends Component {
    render(){
        return(
            <div className="bg-custom">
            {/* Navbar */}
            
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