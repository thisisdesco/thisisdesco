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
    const styles = {
        
    }

    return(
        <Container fluid>
            <Row>
                <h1 className="display-6 my-5 mx-auto">A Special Thanks to Our Partners</h1>
                <div className="partners-container">
                    <img src={rosevilleUX} alt="rosevilleUX logo"/>
                    <img src={designSac} alt="designSac logo" />
                    <img src={cPlus} alt="creativity plus logo" />
                </div>
            </Row>
        </Container>
    );
}

export default Partners