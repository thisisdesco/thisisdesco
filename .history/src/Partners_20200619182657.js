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

const Partners = () => {
    return(
        <Container fluid>
            <Row>
                <h1>A Special Thanks to Our Partners</h1>
                
                <img src={rosevilleUX} alt="rosevilleUX logo"/>
                <img src={designSac} alt="designSac logo" />
                <img src={cPlus} alt="creativity plus logo" />
            </Row>
        </Container>
    );
}

export default Partners