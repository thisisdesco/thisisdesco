import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Event = (props) => {
        return(
            <>
                <Container>
                {/* Date */}
                <h4>{props.date}</h4> 
                    <Container>
                        <Row>
                            {/* Event Image */}
                            <Col lg={3} md={2} className="col-p-0">
                                <Image thumbnail src={props.eventImage} alt="Event Image" className="float-left event-img"/>
                            </Col>
                            {/* Event Title and Description */}
                            <Col lg={9} className="pl-0 event-card">
                                <Col className="event-title">
                                    {props.title}
                                </Col>
                                <Col className="speaker-name">
                                    {props.speaker}
                                </Col>
                                <Col className="ws-description">
                                    {props.description}
                                </Col>
                                <Button variant="outline-info" className="ml-3" href={props.ticketLink} target="_blank">
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