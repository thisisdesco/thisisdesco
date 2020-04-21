import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


const Footer = () => {
    return(
    <Container fluid className="bg-custom">
        <Row className="pt-4 mx-5 d-lg-flex d-sm-block justify-content-center">
            <Col lg={3} className="text-white mt-5 ml-5">
            </Col>
        </Row>
    </Container>
    );
}

export default Footer