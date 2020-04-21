import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
import Body from "./Body";

// Hide navbar on scroll
$(window).scroll(function(e) {

  // add/remove class to navbar when scrolling to hide/show
  var scroll = $(window).scrollTop();
  if (scroll >= 30 && !$('#navbarNavAltMarkup').hasClass('show')) {
      $('.navbar').addClass("navbar-hide");
  } else {
      $('.navbar').removeClass("navbar-hide");
  }

});

function App() {
  return (
    <Body />
  );
}

export default App;
