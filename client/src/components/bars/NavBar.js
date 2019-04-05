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
    console.log("loggedInUser", this.props.loggedInUser);
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
                <a href="/">Home</a>
              </li>
              <li>
                <a>
                  {this.props.userInSession ? (<a href="/" onClick={this.logoutUser}>Logout</a>) : (<a href="/login" >Login</a>)}
                </a>
              </li>
              <li>
              <a>
                  {this.props.userInSession ? (<a href="/artistsignup" >Contribute</a>) : (<a href="/signup">Join Us</a>)}
                </a>
              </li>
              <li>
                <a href="/artistlist">Catalogue</a>
              </li>
              <li>
                <SearchBar className="Searchbar" onSearch={this.searchArtist} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
