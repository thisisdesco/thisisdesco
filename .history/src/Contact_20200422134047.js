import React from 'react';
import {NavigationBar} from './Header';
import Container from 'react-bootstrap/Container';

const Contact = () => {
    return(
        <Container fluid className="bg-custom">
            <NavigationBar />
            <Container fluid>
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
        </Container>
    );
}

export default Contact