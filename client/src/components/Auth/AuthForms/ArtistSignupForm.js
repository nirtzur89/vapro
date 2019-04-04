import React, { Component } from "react";
import SignupService from "../signup-service";
import "../Auth.css";
import { Link } from "react-router-dom";
import axios from "axios";

class ArtistSignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        // this.props.getdata();
        this.setState({
          userName: "",
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        });
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
    return (
      <div>
        <h1>ARTIST SIGNUP</h1>
        <form className="signupForm formDiv" onSubmit={this.handleFormSubmit}>
          <div>
            <input
              type="text"
              name="userName"
              value={this.state.userName}
              className="inputfield"
              placeholder="username"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              className="inputfield"
              placeholder="firstname"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              className="inputfield"
              placeholder="lastname"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="inputfield"
              placeholder="email"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={this.state.password}
              className="inputfield"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password2"
              value={this.state.password2}
              className="inputfield"
              placeholder="password"
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="signup" className="btn" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default ArtistSignupForm;
