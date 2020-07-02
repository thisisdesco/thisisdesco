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
        maxHeight: '10rem',
        maxWidth: '10rem'
    }

    return(
        <Container fluid>

        <h1 className="display-6 my-5 mx-auto">A Special Thanks to Our Partners</h1>
            <Row>
                <Col>
                    <img src={rosevilleUX} alt="rosevilleUX logo" style={styles}/>
                </Col>
                <Col>
                    <img src={designSac} alt="designSac logo" style={styles}/>
                </Col>
                <Col>
                    <img src={cPlus} alt="creativity plus logo" style={styles}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Partners