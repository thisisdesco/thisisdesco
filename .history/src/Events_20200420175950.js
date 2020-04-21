import React, {Component} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {db} from "./Firebase";
import Event from './Event';
import Container from 'react-bootstrap/Container';
import EventImage from './images/noelle-headshot.jpg';

class EventSection extends Component {
   
    state = {
        events: []
    }


    componentDidMount(){
        let events = [];
        db.collection("events").get().then((results) =>{ 
            results.forEach((res) => {
                let event = res.data();
                event.date = Date.parse(event.date);
                event.date.toDateString();
                // if event.timestamp is past today's date (check against today's date)
                events.push(event);
            })
            console.log(events);
            this.setState({events})
        })
    }

    

    render(){

        console.log("events state is ", this.state.events);
        return(
            //this.state.events.map((array of jsx))
            <>
                <Container className="pt-2 px-5">
                    <h1 className="display-4 section-title">Upcoming Events</h1>
                    {this.state.events.map((e, i) => {
                        return(
                            <>
                                <Event date={e.date} title={e.title} speaker={`with ${e.speakerName}`} description={e.description} ticketLink={e.ticketLink} eventImage={e.image}/>
                                {i < (this.state.events.length - 1) && <hr className="mt-5 pb-4" />}
                            </>
                        );
                        })}
                </Container>
            </>
        );
    }
}

export default EventSection