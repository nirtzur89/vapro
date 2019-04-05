import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

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
    } else { return}
    // if (!this.state.userName) {
    //   this.getSingleArtist();
    // } 
  };



  render() {
    console.log('profile', this.state)
    console.log('currentUser', this.props.userInSession)
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.userName}</h2>
          <p>
            Artists Name: {this.state.firstName} {this.state.lastName}
          </p>
          <p>Stage Name: {this.state.artistName}</p>
          <p>location: {this.state.nationality}</p>
          <p>Email: {this.state.email}</p>
          <p>Homebase: {this.state.nationality}</p>
          <p>Bio: {this.state.bio}</p>
          <p>Homebase: {this.state.nationality}</p>
          <p>website: {this.state.website}</p>
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
    );
  }
}

export default withRouter(PublicProfile);
