import React from 'react';
import Container from 'react-bootstrap/Container';
import {NavigationBar} from './Header';
import 'firebase/firestore';
import {db} from "./Firebase";
import Event from './Event';
import Container from 'react-bootstrap/Container';

const PastEvents = () => {
    return(
        <Container fluid className="bg-custom">
            <NavigationBar />
        </Container>
    );
}

export default PastEvents