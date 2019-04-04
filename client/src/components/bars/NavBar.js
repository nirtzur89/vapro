import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Auth/auth-service";
// import { Link } from 'react-router-dom';
import "./Navbar.css";
import buttonred from "./../images/buttonred.png";
import SearchBar from "../../components/SearchArtists/SearchBar.js";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
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
  }
}

export default Navbar;
