import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import designSac from './images/designSac_logo.png';
import rosevilleUX from './images/rosevilleUX_logo.svg';
import cPlus from './images/cPlus_logo.png'

const Partners = () => {
  

    return(
        <Container className="py-5 bg-partners" fluid>
            <div className="divider">
                <hr/>
            </div>
            <Row>
                <h1 className="mt-5 mb-2 mx-auto section-title">A special thanks to Our Partners</h1>
            </Row>
            <Row className="align-items-center mx-auto">
                <Col sm={12} lg={true}>
                    <a href="https://rosevilleux.com" target="_blank">
                        <img src={rosevilleUX} className="partner-logo" alt="rosevilleUX logo"/>
                    </a>
                </Col>
                <Col sm={12} lg={true}>
                    <a href="https://designsacramento.com" target="_blank">
                        <img src={designSac} className="partner-logo" alt="designSac logo" />
                    </a>
                </Col>
                <Col sm={12} lg={true}>
                    <a href="https://www.convenethecreatives.org/" target="_blank">
                        <img src={cPlus} className="partner-logo" alt="creativity plus logo" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Partners