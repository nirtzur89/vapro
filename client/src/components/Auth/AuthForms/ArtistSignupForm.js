import React, { Component } from "react";
import SignupService from "../signup-service";
import "../Auth.css";
import { Link, withRouter } from "react-router-dom";

import axios from "axios";

class ArtistSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: this.props.userInSession,
      artistUserName: this.props.userInSession.userName,
      artistUserId: this.props.userInSession._id,
      email: this.props.userInSession.email,
      artistName: "",
      firstName: "",
      lastName: "",
      avatar: {},
      bio: "",
      nationality: "",
      techniques: [],
      companies: [],
      website: "",
      social: {
        vimeo: "",
        pinterest: "",
        instagram: "",
        facebok: "",
        youtube: ""
      },
      hashtags: [],
      projects: [],
      owner: this.props.userInSession
    };

    // this.service = new SignupService();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    //const artistUserId = this.state.loggedInUser._id;
    //const artistUserName = this.state.loggedInUser.userName;
    const email = this.state.loggedInUser.email;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const artistName = this.state.artistName;
    const bio = this.state.bio;
    const techniques = this.state.techniques;

    axios
      .post(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/artist",
        {
          //artistUserId,
          //artistUserName,
          email,
          firstName,
          lastName,
          artistName,
          bio,
          techniques
        },
        { withCredentials: true }
      )
      .then(() => {
        //this.props.getdata();
        this.setState({
          //artistUserId: "",
          //artistUserName: "",
          //email: "",
          firstName: "",
          lastName: "",
          artistName: "",
          bio: "",
          techniques: [],
        });

        //  this.props.history.push("/artistlist");
      })
      .catch(err => console.log(err));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  addTechnique = e => {
    e.preventDefault()
    let techniques = this.state.techniques.concat([''])
    this.setState({
      techniques: techniques
    })
  }

  render() {
    console.log("props", this.state.loggedInUser);
    return (
      <div className="wrappersignupForm color-change-3x">
        <div className="col-md-6 mx-auto text-center">
          <div className="slide-right">Signup</div>
        </div>
        <div className="SignupForm slide-right">
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              name="artistName"
              value={this.state.artistName}
              className="inputfield"
              placeholder="Stage Name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              className="inputfield"
              placeholder="Firstname"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              className="inputfield"
              placeholder="Lastname"
              onChange={this.handleChange}
            />
            <textarea
              type="text"
              name="bio"
              value={this.state.bio}
              className="inputfield"
              placeholder="Bio"
              onChange={this.handleChange}
            />
            {/* <h3>Techniques</h3>
            
            {this.state.techniques.map((technique, index) => (
              <span key={index}>
                <input
                  type="text"
                  name="techniques"
                  className="Techniques"
                  onChange={this.handleChange}
                  value={technique}
                />
                
              </span>
            ))} */}
            <button onClick={this.addTechnique}>+</button>

            <input type="Submit" value="Signup" className="btn" />
          </form>
          <p>
            Already have account?
            <Link to={"/login"}> Login</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(ArtistSignupForm);
