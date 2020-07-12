// import React, { Component, useState, useEffect } from 'react';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';
// import { db } from "./components/Firebase";
// import Event from './components/Event';
// import Container from 'react-bootstrap/Container';
// import EventImage from './images/noelle-headshot.jpg';
// import { imagesRef } from './components/Firebase';

// const EventSection = () => {

//     const [events, setEvents] = useState({});

//     useEffect(() => {

//         const getEvents = async () => {
//             const results = await db.collection("events").get();
//             const newEvents = Object.assign({}, events);
//             await results.forEach(await (async (res) => {
//                 let event = res.data();
//                 event.image = await imagesRef.child(event.image).getDownloadURL();
//                 // if event.timestamp is past today's date (check against today's date)
//                 newEvents[res.id] = Object.assign({}, event);
//                 setEvents(newEvents);
//             }));
//         }
//         getEvents();
//     }, [])
//     console.log(events);
//     return (
//         //this.state.events.map((array of jsx))
//         <>
//             <Container className="pt-2 px-5">
//                 <h1 className="display-4 section-title">Upcoming Events</h1>
//                 {Object.keys(events).map((eventKey, i) => {
//                     const e = events[eventKey];
//                     console.log("e is ", typeof events);
//                     return (
//                         <div key={eventKey}>
//                             <Event date={e.date} title={e.title} speaker="speaker name" description={e.description} ticketLink={e.ticketLink} eventImage={e.image} />
//                             {i < (events.length - 1) && <hr className="mt-5" />}
//                         </div>
//                     );
//                 })}
//             </Container>
//         </>
//     );
// }

// export default EventSection