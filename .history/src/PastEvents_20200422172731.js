import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import {NavigationBar} from './Header';
import 'firebase/firestore';
import {db} from "./Firebase";
import {MiniEvent} from './Event';
import Footer from './Footer';
import Grid from '@material-ui/core/Grid';

class PastEvents extends Component {
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
                      pastEvents.push(event);
                }
                
                // if event.timestamp is past today's date (check against today's date)
                
            })
            console.log(pastEvents);
            this.setState({pastEvents})
        })
    }
    render(){
        return(
            <>
                <Container fluid className="bg-custom">
                    <NavigationBar />
                </Container>
                <Container id="past-events" className="pt-2 px-5">
                    
                    <h1 className="display-4 section-title pt-4">Past Events</h1>
                    <div className="pl-2">
                        {this.state.pastEvents.map((e, i) => {
                            return(
                                <>
                                    <MiniEvent date={e.date} title={e.title} ticketLink={e.ticketLink} eventImage={e.image}/>
                                </>
                            );
                            })}
                    </div>
                </Container>
                {/* <Footer/> */}
            </>
        );
    }
}


export default PastEvents