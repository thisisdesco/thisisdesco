import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import PartnerIcon from '../images/partnership.png';
import VolunteerIcon from '../images/volunteer.png';
import PresentIcon from '../images/present.png';



const Blurb = (props) => {
    return(
        <Col lg={4} md={12}>
            <Card border="light" className="bg-light text-center px-3">  
                <img
                    src={props.icon}
                    className="align-top mx-auto dot mx-3 my-3"
                    alt={props.alt}
                />
                <Card.Body className="card-body pb-3">
                    <h4>{props.cardTitle}</h4>
                    <Card.Text>
                        {props.cardText}
                    </Card.Text>
                    <Button variant="outline-info" className="mt-3 justify-content-end" href={props.href} target="_blank">{props.buttonText}</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

const GetInvolved = () => {
    
        //MISSION STATEMENT
        const getInvolved = "DESCO is always looking for community support."
        const getInvolved2 = "Check out ways to get involved below!"
        // VOLUNTEER CARD
        const card1 = "DESCO is run by volunteers who are passionate about growing Sacramento's design community. Want to contribute?";
        const volunteerForm = "https://docs.google.com/forms/d/e/1FAIpQLScrJkbYekalUHPGZV_MfsLzD36WNAyYUNJfPANPoj8a2SDLWQ/viewform?usp=sf_link"
        // PARTNERSHP CARD
        const card2 = "Have an idea for an event or workshop? Want to partner with us?";
        const partnershipForm = "https://docs.google.com/forms/d/e/1FAIpQLSffJVIpj5GGoO3yn_NItSJn1GJF6dU1SsMLH80Nv6fnysLoTw/viewform?usp=sf_link"
        // SPONSOR CARD
        const card3 = "Want to share your knowledge with the community? Send us your idea and we'd be happy to collaborate with you!";
        const presenterForm = "https://docs.google.com/forms/d/e/1FAIpQLSeiQffWoWzaJWODjfEHkJkRdUJ3DZKPRkoMg_USL0YzwSyTCw/viewform?usp=sf_link"


        return(
        <Container fluid className="bg-light">
           <Container id="getInvolved" className="bg-light get-involved" fluid>
               <Container className="text-center">
                    <h1 className="display-4 section-title pt-5">Want to get involved?</h1>
                    <p className="lead">{getInvolved}<br></br>{getInvolved2}</p>
              </Container>
                <Row className="pt-5 mx-auto">
                    <Blurb icon={VolunteerIcon} alt="Volunteer Icon" cardTitle="Volunteer" cardText={card1} buttonText="Join our Team" href={volunteerForm}/>
                    <Blurb icon={PartnerIcon} alt="Partnerships Icon" cardTitle="Partnerships" cardText={card2} class="card2" buttonText="Send us a proposal" href={partnershipForm}/>
                    <Blurb icon={PresentIcon} alt="Present Icon" cardTitle="Present with us" cardText={card3} class="card3" buttonText="Send us Your Idea" href={presenterForm}/>
                </Row>
           </Container>
        </Container>
        );
}
export default GetInvolved
