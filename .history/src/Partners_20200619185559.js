import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import designSac from './images/designSac_logo.png';
import rosevilleUX from './images/rosevilleUX_logo.svg';
import cPlus from './images/cPlus_logo.png'

const Partners = () => {
    const partnerLogos = {
        maxHeight: '15rem',
        maxWidth: '15rem',
        padding: '2rem'
    }
    const columns = {
        paddingRight: '0px'
    }

    return(
        <Container fluid>
            <Row>
                <h1 className="partners mt-5 mb-2 mx-auto">A Special Thanks to Our Partners</h1>
            </Row>
            <Row className="justify-content-center mx-5">
                <img src={rosevilleUX} alt="rosevilleUX logo" style={partnerLogos}/>
                <img src={designSac} alt="designSac logo" style={partnerLogos}/>
                    <img src={cPlus} alt="creativity plus logo" style={partnerLogos}/>
            </Row>
        </Container>
    );
}

export default Partners