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
                    <Card.Text className={props.class}>
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
        const missionStatement = "DESCO is always looking for community support. Check out ways to get involved below!"
        // VOLUNTEER CARD
        const card1 = "DESCO is run by volunteers who are passionate about growing Sacramento's design community. Click below to see how you can contribute!";
        // DONATE CARD
        const card2 = "Have an idea for an event or workshop? Want to partner with us?";
        // SPONSOR CARD
        const card3 = "Want to share your knowledge with the community? Send us your idea and we'd be happy to collaborate with you!";
       
        return(
           <div id="getInvolved" className="bg-light">
               <Container className="text-center">
                    <h1 className="display-4 section-title pt-5">Want to get involved?</h1>
                    <p className="lead">{missionStatement}</p>
              </Container>
                <Row className="pt-5 mx-5">
                    <Blurb icon={ChatIcon} cardTitle="Volunteer" cardText={card1}/>
                    <Blurb icon={BookIcon} cardTitle="Partnerships" cardText={card2} class="card2"/>
                    <Blurb icon={PlanIcon} cardTitle="Present with us" cardText={card3}/>
                </Row>
           </div>
        );
    }
}
export default GetInvolved
