import React from 'react';
import Container from 'react-bootstrap/Container';
import {NavigationBar} from './Header';

const PastEvents = () => {
    return(
        <Container fluid className="bg-custom">
            <NavigationBar />
        </Container>
    );
}

export default PastEvents