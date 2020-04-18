import React, {Component} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {db} from "./Firebase";
import Event from './Event';
import Container from 'react-bootstrap/Container';

class EventSection extends Component {
   
    state = {
        events: []
    }


    componentDidMount(){
        let events = [];
        db.collection("events").get().then((results) =>{ 
            results.forEach((res) => {
                events.push(res.data());
                // let event = res.data()
                // if event.timestamp is past today's date (check against today's date)
                // then push to the array
            })
            console.log(events);
            // this.setState({events})
        })
    }

    render(){
        return(
            //this.state.events.map((array of jsx))
            <>
                <Container className="pt-2 px-5">
                    <h1 className="display-4 section-title">Upcoming Events</h1>
                    <Event />
                    <hr className="mt-5" />
                    <Event />
                </Container>
            </>
        );
    }
}

export default EventSection