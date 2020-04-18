import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoelleHeadshot from './images/noelle-headshot.jpg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

class Event extends Component {
    render(){
        return(
            <>
                <Container className="pt-4">
                {/* Date */}
                <h4>01/31/2020</h4> 
                    <Container>
                        <Row>
                            {/* Event Image */}
                            <Col lg={3}>
                                <Image thumbnail src={NoelleHeadshot} alt="Event Image" className="float-left"/>
                            </Col>
                            {/* Event Title and Description */}
                            <Col lg={9} className="pl-0 event-card">
                                <Col className="h4">
                                    Event Title
                                </Col>
                                <Col className="h5">
                                    With Guest Speaker
                                </Col>
                                <Col className="ws-description">
                                    Event Description that is much too long.
                                </Col>
                                <Button variant="outline-info" className="ml-3">
                                    Get Tickets
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </>
        );
    }
}

export default Event