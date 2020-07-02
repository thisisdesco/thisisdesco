import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import descoWordmark from './images/DESCO_Wordmark.svg';
import Button from 'react-bootstrap/Button';
import designSac from './images/designSac_logo.png';
import rosevilleUX from './images/rosevilleUX_logo.svg';
import cPlus from './images/cPlus_logo.png'

const Sponsors = () => {
    return(
        <Container fluid>
            <Row>
                <h1>Sponsors</h1>
                <Col>
                <Image className="sponsor-logo" src={rosevilleUX} alt="rosevilleUX logo"  />
                </Col>
                <Image className="sponsor-logo" src={designSac} alt="designSac logo"  />
                <Image className="sponsor-logo" src={cPlus} alt="creativity plus logo"  />
            </Row>
        </Container>
    );
}

export default Sponsors