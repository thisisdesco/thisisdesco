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
                    <Button variant="outline-info" className="mt-3">Learn More</Button>
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
        const card1 = "DESCO is run by volunteers who are passionate about growing Sacramento's design community. All events are made possible by the generous donations from our team and community. Click below to see how you can contribute!";
        // DONATE CARD
        const card2 = "Have an idea for an event or workshop? Want to partner with us?";
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
                    <Blurb icon={BookIcon} cardTitle="Suggestions" cardText={card2}/>
                    <Blurb icon={PlanIcon} cardTitle="Sponsor" cardText={card3}/>
                </Row>
           </div>
        );
    }
}
export default GetInvolved
