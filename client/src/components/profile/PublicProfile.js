import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import "./PublicProfile.css";
//this will go to private!!!
import EditProfile from "./EditProfile";

class PublicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.userInSession
    };
  }

  componentDidMount() {
    console.log("show me", this.props);
    this.getSingleArtist();
    this.getLogedIn();
  }

  getLogedIn() {
    console.log("getuser", this.state.loggedInUser);
    return this.state.loggedInUser;
  }

  getSingleArtist = () => {
    const { params } = this.props.match;
    axios
      .get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
          `/artists/${params.id}`,
        { withCredentials: true }
      )
      .then(responseFromApi => {
        const theProfile = responseFromApi.data;
        this.setState(theProfile);
      });
  };

  //this will go to private!!!
  renderEditForm = () => {
    const theLoggedInUser = this.state.owner;
    if (theLoggedInUser === this.props.match.params.id) {
      return (
        <EditProfile
          theProfile={this.state}
          getTheProfile={this.getSingleArtist}
          {...this.props}
        />
      );
    } else {
      return;
    }
    // if (!this.state.userName) {
    //   this.getSingleArtist();
    // }
  };

  render() {
    console.log("profile", this.state);
    console.log("currentUser", this.props.userInSession);
    return (
      <div className="Profilewrapper">
        <div className="App-header text-center slide-right">
          <div className="Artist" key={this.state._id}>
            <img
              className="ArtistPic"
              alt="ArtistPic"
              src={this.state.avatar}
            />
            <div className="ArtistProfile">
              <div className="Artisth2">{this.state.userName}</div>
              <div className="Artistdata">
                Stage Name: {this.state.artistName}
              </div>
              <div className="Artistdata">
                Location: {this.state.nationality}
              </div>
              <div className="Artistdata">Email: {this.state.email}</div>
              <div className="Artistdata">
                Homebase: {this.state.nationality}
              </div>
              <div className="Artistdata">Bio: {this.state.bio}</div>
              <div className="Artistdata">
                Homebase: {this.state.nationality}
              </div>
              <div className="Artistdata">Website: {this.state.website}</div>
              {/* <p>
            Designs:{" "}
            {this.state.techniques.map(oneTech => {
              return <div>{oneTech}</div>;
            })}
          </p> */}
              {/* <h2>social</h2>
          <p>vimeo: {this.state.social.vimeo}</p>
          <p>pinterest: {this.state.social.pinterest}</p>
          <p>youtube: {this.state.social.youtube}</p>
          <p>instagram: {this.state.social.instagram}</p> */}
              <div>{this.renderEditForm()} </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PublicProfile);
