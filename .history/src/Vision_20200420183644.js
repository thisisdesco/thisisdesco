import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';

const Vision = () => {
    return(
        <Container className="text-center">
                    <h1 className="display-4 section-title">Our Vision</h1>
                    <p className="lead">{missionStatement}</p>
              </Container>
    );
}

export default Vision