import React from "react";
// import { Link } from 'react-router-dom';
import "./Navbar.css";
import buttonred from "./../images/buttonred.png";
import SearchBar from "../../components/SearchArtists/SearchBar.js";

const Navbar = function() {
  return (
    <div className="navbar">
      <input className="hide" type="checkbox" id="op" />
      <div className="lower">
        <label htmlFor="op">
          <img alt="buttonred" className="buttonred" src={buttonred} />
        </label>
      </div>
      <div className="overlay overlay-hugeinc">
        <label htmlFor="op" />
        <nav>
          <ul>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/signup">Signup</a>
            </li>
            <li>
              <a href="/artistlist">Catalogue</a>
            </li>
            <li>
              <SearchBar />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
