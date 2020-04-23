import React from 'react';
import {NavigationBar} from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';

const Contact = () => {
    return(
        <>
        <Container fluid className="bg-custom">
            <NavigationBar />
        </Container>
            <DeviceMotionEvent className="pt-2 px-5">
                        <h1 className="display-4 section-title pt-4">Get in Touch!</h1>
                        <Row className="justify-content-between pb-3">
                        <Col sm={12} lg={7}>
                            <p className="lead">This will be a contact form</p>
                        </Col> 
                        </Row>
            </Contaidivner>
        <Footer/>
        </>
       
    );
}

export default Contact