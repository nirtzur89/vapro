import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Auth/auth-service";
// import { Link } from 'react-router-dom';
import "./Navbar.css";
import buttonred from "./../images/buttonred.png";
import axios from "axios";
import SearchBar from "../../components/SearchArtists/SearchBar.js";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, overlayOpen: false };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  getAllArtists = () => {
    axios

      .get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/artists",
        { withCredentials: true }
      )
      .then(allArtistsFromApi => {
        this.setState({ listOfAllArtists: allArtistsFromApi.data });
        console.log("artistsfromAPI", allArtistsFromApi.data);
      });

    console.log("stateeee", this.state);
  };

  // searchArtist = event => {
  //   console.log("EVENT", event.target.value);
  //   this.setState({
  //     queryResult: event.target.value
  //   });
  // };

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  searchArtist = searchTerm => {
    this.setState(
      {
        overlayOpen: false
      },
      () => {
        this.props.searchArtist(searchTerm);
      }
    );
  };

  onClick = () => {
    this.setState({
      overlayOpen: true
    });
  };

  render() {
    console.log("this.state.overlayOpen", this.state.overlayOpen);
    return (
      <div className="navbar">
        <input className="hide" type="checkbox" id="op" />
        <div className="lower">
          <label htmlFor="op">
            <img
              alt="buttonred"
              className="buttonred"
              src={buttonred}
              onClick={this.onClick}
            />
          </label>
        </div>
        <div
          className="overlay overlay-hugeinc"
          style={{
            display: this.state.overlayOpen ? "block" : "none",
            visibility: "visible !important"
          }}
        >
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
                <SearchBar onSearch={this.searchArtist} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
