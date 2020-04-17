import React, { Component } from "react";
import CardDeck from 'react-bootstrap/CardDeck';
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
            {/* need to figure out how to border none */}
            <Card border="light" className="bg-light text-center px-3">  
                <img
                    src={props.icon}
                    className="align-top mx-auto dot px-3 py-3"
                    alt="Chat Icon"
                />
                <Card.Body class="card-body">
                    <h4>{props.cardTitle}</h4>
                    <Card.Text>
                        {props.cardText}
                    </Card.Text>
                <Button variant="outline-info">Click Me</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

class GetInvolved extends Component{
    
    render(){
        const card1 = "DESCO is always looking for community members to help organize future events. Contact us below to share your skills and see what skills we are currently searching for.";
        const card2 = "Donate to our cause by clicking the button below. Contact us below to share your skills and see what skills we are currently searching for. Jump in the pool when the Summer is hot.";
        const card3 = "Sponsor us like pizza parlors sponsor local soccer teams! Or whatever. Contact us below to share your skills and see what cats and dogs we want to host at our next event.";
        const missionStatement = "DESCO is on a mission and is always looking for community support. If you vibe with DESCO's mission, check out ways to get involved below!"

        return(
           <div className="bg-light">
               <Container className="text-center">
                    <h1 class="display-4 section-title">Want to get involved?</h1>
                    <p class="lead">{missionStatement}</p>
              </Container>
                <CardDeck>
                    <Blurb icon={ChatIcon} cardTitle="Volunteer" cardText={card1}/>
                    <Blurb icon={BookIcon} cardTitle="Donate" cardText={card2}/>
                    <Blurb icon={PlanIcon} cardTitle="Sponsor" cardText={card3}/>
                </CardDeck>
           </div>
        );
    }
}
export default GetInvolved
