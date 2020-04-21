import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

const Vision = () => {
    return(
        <Container fluid className="vision-img">
            <Container className="pt-2 px-5">
                        <h1 className="display-4 section-title pt-4 our-vision">Our Vision</h1>
                        <Row className="justify-content-between pb-3">
                            <Image src="images/values_illustration.png" alt="values illustration" className="img-fluid col-sm-12 col-lg-5 mb-5" />
                        </Row>
            </Container>
        </Container>
    );
}

export default Vision