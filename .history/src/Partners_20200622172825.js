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
                <h1 className="partners mt-5 mb-2 mx-auto section-title">A special thanks to Our Partners</h1>
            </Row>
            <Row className="justify-content-center mx-5">
                <a href="https://rosevilleux.com" target="_blank">
                    <img src={rosevilleUX} className="partner-logo" alt="rosevilleUX logo"/>
                </a>
                <a href="https://designsacramento.com" target="_blank">
                    <img src={designSac} className="partner-logo" alt="designSac logo" />
                </a>
                <a href="https://designsacramento.com" target="_blank">
                <img src={cPlus} className="cplus-logo" alt="creativity plus logo" />
                </a>
            </Row>
        </Container>
    );
}

export default Partners