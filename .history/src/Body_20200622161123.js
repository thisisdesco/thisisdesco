import React, {Component} from 'react';
import Header from './Header';
import Vision from './Vision';
import GetInvolved from './GetInvolved';
import EventSection from './UpcomingEvents';
import Footer from './Footer';
import AltFooter from './AltFooter';
import Partners from './Partners'

class Body extends Component{
    render(){
        console.log(process.env.REACT_APP_FIREBASE_API_KEY)

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