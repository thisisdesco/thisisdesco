import React, {Component} from 'react';
import Header from './Header';
import Vision from './Vision';
import GetInvolved from './GetInvolved';
import Events from './Events';

class Body extends Component{
    render(){
        return(
            <div>
                {/* Header */}
                <Header />
                {/* Upcoming Events */}
                <Events />
                {/* Our Vision */}
                <Vision />
                {/* Want to Get Involved / 'GetInvolved' */}
                <GetInvolved />
                {/* Footer */}
            </div>
        );
    }
}
export default Body