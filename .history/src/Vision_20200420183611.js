import React, {Component} from 'react';

const Vision = () => {
    return(
        <Container className="text-center">
                    <h1 className="display-4 section-title">Want to get involved?</h1>
                    <p className="lead">{missionStatement}</p>
              </Container>
                <Row className="pt-5 mx-5">
                    <Blurb icon={ChatIcon} cardTitle="Volunteer" cardText={card1}/>
                    <Blurb icon={BookIcon} cardTitle="Donate" cardText={card2}/>
                    <Blurb icon={PlanIcon} cardTitle="Sponsor" cardText={card3}/>
                </Row>
    );
}

export default Vision