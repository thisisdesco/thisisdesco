import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';

const Event = (props) => {
        return(
            <>
                <Container>
                {/* Date */}
                <h4>{props.date}</h4> 
                    <Container>
                        <Row className="pl-2">
                            {/* Event Image */}
                            <Image thumbnail src={props.eventImage} alt="Event Image" className="float-left event-img"/>
                            {/* Event Title and Description */}
                            <Col lg={9} className="pl-0 event-card">
                                <Col className="event-title">
                                    {props.title}
                                </Col>
                                <Col className="event-speaker">
                                    {props.speaker}
                                </Col>
                                <Col className="event-description">
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

const MiniEvent = (props) => {
    return(
        <Grid item>
            <div>
                    <Col className="mini-event-title pl-1">
                        {props.title}
                    </Col>
                    {/* Event Image */}
                    <Image thumbnail src={props.eventImage} alt="Event Image" className="mini-event-img"/>
                    {/* Event Title and Description */}
                    <Button variant="outline-info" className="ml-1" href={props.ticketLink} target="_blank">
                        Event Details
                    </Button>
            </div>
        </Grid>
    );
}

export default Event
export {MiniEvent}