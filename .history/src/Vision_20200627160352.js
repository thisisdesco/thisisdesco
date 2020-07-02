import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import vision_illustration from './images/vision_illustration.png'
import Col from 'react-bootstrap/Col';

const Vision = () => {
    const ourVision = "DESCO envisions an educational design community in Sacramento for people from all backgrounds, fields, and skill levels. Our mission is to serve as a network for fostering awareness, connection, and inspiration in the design community.";
    const whatWeDo = "We meet monthly (in person) to discuss design and its related topics in a safe and inclusive environment."
    return(
        <Container fluid id="about" className="vision-img">
            <Container className="pt-2 px-5">
                        <h1 className="display-4 section-title pt-4 our-vision">Our Vision</h1>
                        <Row className="justify-content-between pb-3">
                        <Col sm={12} lg={6}>
                            <p className="lead" style={{fontSize: "1.2rem"}}>{ourVision}</p>
                            <h4 className="pt-4">What do we do?</h4>
                            <p>{whatWeDo}</p>
                        </Col> 
                            <Col sm={12} lg={5} className="mb-5 mt-0">
                                <Image src={vision_illustration} alt="vision illustration" fluid />
                            </Col>
                        </Row>
            </Container>
        </Container>
    );
}

export default Vision