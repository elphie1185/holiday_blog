import React from "react";
import {Link} from "react-router-dom";

function Header (){
    return(
    <header>
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <p class="navbar-brand">Notes from our Travels</p>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li id="home"><Link to="/">Home</Link></li>
            <li id="about"><Link to="/about">About Us</Link></li>
            <li id="blog"><Link to="/travel">Our Travels</Link></li>
          </ul>
        </div>
      </nav>
    </header>
    )
};

export default Header; 
