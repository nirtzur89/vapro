import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';
import buttonred from "./../images/buttonred.png"

const Navbar = function() {
          return (
              <div className ="navbar">
            <input type="checkbox" id="op"></input>
            <div className="lower">
              <label htmlFor="op"><img alt="buttonred" src={buttonred}/></label>
            </div>
            <div className="overlay overlay-hugeinc">
                        <label htmlFor="op"></label>
                        <nav>
                            <ul>
                                <li><a href="/login">Login</a></li>
                                <li><a href="/signup">Signup</a></li>
                                <li><a href="/artistlist">Catalogue</a></li>

                            </ul>
                        </nav>
            </div>
            </div>
            
          );
        }; 

export default Navbar;