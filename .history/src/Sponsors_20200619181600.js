import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import descoWordmark from './images/DESCO_Wordmark.svg';
import Button from 'react-bootstrap/Button';
import designSac from './images/designSac_logo.png';
import rosevilleUX from './images/rosevilleUX_logo.svg';

const Sponsors = () => {
    return(
        <Container>
        <Col>
            <Image className="lg-3" src={rosevilleUX} alt="rosevilleUX logo" fluid />
        </Col>
        </div>
    );
}

export default Sponsors