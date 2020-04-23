import React, {Component} from 'react';
import NavigationBar from './'

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
export default PastEvents