import React, { Component } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from "./Firebase";
import Event from './Event';
import Container from 'react-bootstrap/Container';
import EventImage from './images/noelle-headshot.jpg';
import { imagesRef } from './Firebase';

class EventSection extends Component {

    state = {
        events: []
    }


    async componentDidMount() {
        
        const results = db.collection("events").get().then(results => {
            const events = {};
            results.forEach((async (res) => {
                let event = res.data();
                event.image = await imagesRef.child(event.image).getDownloadURL();
                // if event.timestamp is past today's date (check against today's date)
                events[res.id] = event;
            }));
            console.log('setting state to ', events)
            this.setState({ events: [...events]})
        });
        
    }




    render() {

        
        const {events} = this.state;
        console.log(events);
        return (
            //this.state.events.map((array of jsx))
            <>
                <Container className="pt-2 px-5">
                    <h1 className="display-4 section-title">Upcoming Events</h1>
                    {events.map((e, i) => {
                        return (
                            <>
                                <Event date={e.date} title={e.title} speaker="speaker name" description={e.description} ticketLink={e.ticketLink} eventImage={e.image} />
                                {i < (this.state.events.length - 1) && <hr className="mt-5" />}
                            </>
                        );
                    })}
                </Container>
            </>
        );
    }
}

export default EventSection