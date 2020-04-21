import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Event = (props) => {
        return(
            <>
                <Container className="pt-4">
                {/* Date */}
                <h4>{props.date}</h4> 
                    <Container>
                        <Row>
                            {/* Event Image */}
                            <Col lg={3} className="col-p-0">
                                <Image thumbnail src={props.eventImage} alt="Event Image" className="float-left event-img"/>
                            </Col>
                            {/* Event Title and Description */}
                            <Col lg={9} className="pl-0 event-card">
                                <Col className="h4">
                                    {props.title}
                                </Col>
                                <Col className="h5">
                                    {props.speaker}
                                </Col>
                                <Col className="ws-description">
                                    {props.description}
                                </Col>
                                <Button variant="primary" className="ml-3" href={props.ticketLink}>
                                    Get Tickets
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </>
        );
}

export default Event