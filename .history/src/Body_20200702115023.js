import React, {Component} from 'react';
import Header from './sections/Header';
import Vision from './Vision';
import GetInvolved from './GetInvolved';
import EventSection from './UpcomingEvents';
import Footer from './Footer';
import AltFooter from './AltFooter';
import Partners from './Partners'

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