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
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      artist: true,
      companies: [],
      nationality: "",
      techniques: [],
      hashtags: []
    };

    // this.service = new SignupService();
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const userName = this.state.userName;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const password = this.state.password;

    axios
      .post(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") + "/artist",
        {
          userName,
          firstName,
          lastName,
          email,
          password
        },
        { withCredentials: true }
      )
      .then(() => {
        //this.props.getdata();
        this.setState({
          userName: "",
          firstName: "",
          lastName: "",
          email: "",

          password: ""
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
              name="userName"
              value={this.state.userName}
              className="inputfield"
              placeholder="Username"
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
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="inputfield"
              placeholder="Email"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              className="inputfield"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password2"
              value={this.state.password2}
              className="inputfield"
              placeholder="Password"
              onChange={this.handleChange}
            />
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
