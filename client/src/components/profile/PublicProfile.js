import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    this.getSingleArtist();
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
    if (!this.state.userName) {
      this.getSingleArtist();
    } else {
      return (
        <EditProfile
          theProfile={this.state}
          getTheProfile={this.getSingleArtist}
          {...this.props}
        />
      );
    }
  };

  render() {
    console.log("techs", this.state.techniques);
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.userName}</h2>
          <p>location: {this.state.nationality}</p>
          <p>Email: {this.state.email}</p>
          <p>Homebase: {this.state.nationality}</p>
          {/* <p>Designs: {this.state.techniques.map(oneTech => {
            return (
              <div>
                {oneTech}
              </div>
            )

          })}</p> */}
          <div>{this.renderEditForm()} </div>
        </div>
      </div>
    );
  }
}

export default PublicProfile;
