import React, {Component} from 'react';
import Header from './Header';
import Vision from './Vision';
import GetInvolved from './GetInvolved';
import EventSection from './Events';
import Footer from './Footer';

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
                {/* Footer */}
                <Footer />
            </div>
        );
    }
}
export default Body