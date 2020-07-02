import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import designSac from './images/designSac_logo.png';
import rosevilleUX from './images/rosevilleUX_logo.svg';
import cPlus from './images/cPlus_logo.png'

const Partners = () => {
    // const partnerLogos = {
    //     maxHeight: '15rem',
    //     maxWidth: '15rem',
    //     padding: '2rem'
    // }

    return(
        <Container className="py-5 bg-partners" fluid>
            <div className="divider">
                <hr/>
            </div>
            <Row>
                <h1 className="partners mt-5 mb-2 mx-auto section-title">A special thanks to Our Partners</h1>
            </Row>
            <Row className="justify-content-center mx-5">
                <img src={rosevilleUX} className="partner-logo" alt="rosevilleUX logo" style={partnerLogos}/>
                <img src={designSac} alt="designSac logo" style={partnerLogos}/>
                <img src={cPlus} alt="creativity plus logo" style={partnerLogos}/>
            </Row>
        </Container>
    );
}

export default Partners