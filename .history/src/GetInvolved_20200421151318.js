import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ChatIcon from './images/chat_icon.png';
import BookIcon from './images/book_icon.png';
import PlanIcon from './images/plan_icon.png';
import Container from 'react-bootstrap/Container';



const Blurb = (props) => {
    return(
        // need to fix horizontal scroll
        <Col lg={4} md={12}>
            <Card border="light" className="bg-light text-center px-3">  
                <img
                    src={props.icon}
                    className="align-top mx-auto dot px-3 py-3"
                    alt="Chat Icon"
                />
                <Card.Body className="card-body pb-5">
                    <h4>{props.cardTitle}</h4>
                    <Card.Text>
                        {props.cardText}
                    </Card.Text>
                <Button variant="outline-info" className="mt-3">Click Me</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

class GetInvolved extends Component{
    
    render(){ 
        //MISSION STATEMENT
        const missionStatement = "DESCO is on a mission and is always looking for community support. If you vibe with DESCO's mission, check out ways to get involved below!"
        // VOLUNTEER CARD
        const card1 = "DESCO is always looking for community members to help organize future events. Contact us below to share your skills and see what skills we are currently searching for.";
        // DONATE CARD
        const card2 = "Donate to our cause by clicking the button below. Contact us below to share your skills and see what skills we are currently searching for. Jump in the pool when the Summer is hot.";
        // SPONSOR CARD
        const card3 = "Sponsor us like pizza parlors sponsor local soccer teams! Or whatever. Contact us below to share your skills and see what cats and dogs we want to host at our next event.";
       
        return(
           <div id="getInvolved" className="bg-light">
               <Container className="text-center">
                    <h1 className="display-4 section-title pt-5">Want to get involved?</h1>
                    <p className="lead">{missionStatement}</p>
              </Container>
                <Row className="pt-5 mx-5">
                    <Blurb icon={ChatIcon} cardTitle="Volunteer" cardText={card1}/>
                    <Blurb icon={BookIcon} cardTitle="Donate" cardText={card2}/>
                    <Blurb icon={PlanIcon} cardTitle="Sponsor" cardText={card3}/>
                </Row>
           </div>
        );
    }
}
export default GetInvolved
