import React from 'react';
import Container from 'react-bootstrap/Container';
import {NavigationBar} from './Header';
import 'firebase/firestore';
import {db} from "./Firebase";
import Event from './Event';

const PastEvents = () => {
    state = {
        pastEvents: []
    }


    componentDidMount(){
        let pastEvents = [];
        db.collection("events").get().then((results) =>{ 
            results.forEach((res) => {
                let event = res.data(); //pull event data from firebase
                let eventDate = new Date(Date.parse(event.date));
                let currentDate = new Date();
                if(currentDate > eventDate){
                    event.date = eventDate.toLocaleDateString('en-US', { //Format date with leading zero
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                      });
                      upcomingEvents.push(event);
                }
                
                // if event.timestamp is past today's date (check against today's date)
                
            })
            console.log(upcomingEvents);
            this.setState({upcomingEvents})
        })
    }
    return(
        <Container fluid className="bg-custom">
            <NavigationBar />
        </Container>
    );
}

export default PastEvents