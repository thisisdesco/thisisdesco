import React, {Component} from 'react';
import Header from './sections/Header';
import Vision from './sections/Vision';
import GetInvolved from './sections/GetInvolved';
import EventSection from './sections/UpcomingEvents';
import Footer from './Footer';
import AltFooter from './sections/AltFooter';
import Partners from './sections/Partners'

class Body extends Component{
    render(){
        return(
            <div>
                {/* Header */}
                <Header />
                {/* Upcoming Events */}
                <EventSection />
                {/* Our Vision */}
                <Vision />
                {/* Want to Get Involved / 'GetInvolved' */}
                <GetInvolved />
                <Partners />
                {/* Footer */}
                <AltFooter />
                
            </div>
        );
    }
}
export default Body