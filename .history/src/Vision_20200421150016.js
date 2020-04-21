import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import values_illustration from './images/values_illustration.png'
import Col from 'react-bootstrap/Col';

const Vision = () => {
    const ourVision = "DESCO envisions an educational design community in Sacramento for people from all backgrounds, fields, and skill levels.";
    return(
        <Container fluid id="about" className="vision-img">
            <Container className="pt-2 px-5">
                        <h1 className="display-4 section-title pt-4 our-vision">Our Vision</h1>
                        <Row className="justify-content-between pb-3">
                        <Col sm={12} lg={7}>
                            <p className="lead">{ourVision}</p>
                        </Col> 
                            <Col sm={12} lg={5} className="mb-5">
                                <Image src={values_illustration} alt="values illustration" fluid />
                            </Col>
                        </Row>
            </Container>
        </Container>
    );
}

export default Vision