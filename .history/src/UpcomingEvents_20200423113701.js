import React, {Component} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {db} from "./Firebase";
import Event from './Event';
import Container from 'react-bootstrap/Container';
import imagesRef

class EventSection extends Component {
   
    state = {
        upcomingEvents: []
    }


    componentDidMount(){
        let upcomingEvents = [];
        db.collection("events").get().then((results) =>{ 
            results.forEach((res) => {
                let event = res.data(); //pull event data from firebase
                let eventDate = new Date(Date.parse(event.date));
                let currentDate = new Date();
                let placeHolder = './images/descoLogo.png';
                if(event.speakerName == undefined){
                    event.speakerName = "DESCO";
                }
                if(event.image == undefined){
                    event.image = placeHolder;
                }
                if(currentDate < eventDate){
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

    

    render(){

        console.log("events state is ", this.state.upcomingEvents);
        return(
            //this.state.events.map((array of jsx))
            <>
                <Container id="events" className="pt-2 px-5">
                    <h1 className="display-4 section-title">Upcoming Events</h1>
                    {this.state.upcomingEvents.map((e, i) => {
                        return(
                            <>
                                <Event date={e.date} title={e.title} speaker={`with ${e.speakerName}`} description={e.description} ticketLink={e.ticketLink} eventImage={e.image}/>
                                {i < (this.state.upcomingEvents.length - 1) && <hr className="mt-5 pb-4" />}
                            </>
                        );
                        })}
                </Container>
            </>
        );
    }
}

export default EventSection