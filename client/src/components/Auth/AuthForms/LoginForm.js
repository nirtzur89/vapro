import React, { Component } from "react";
import AuthService from "../auth-service";
import "../Auth.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.Auth = new AuthService();
  }

  handleFormSubmit(e) {
    e.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        this.props.history.replace("/me");
      })
      .catch(err => {
        alert(err);
      });
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) this.props.history.replace("/me");
  }

  render() {
    console.log("props", this.props);
    return (
      <div className="loginForm formDiv">
        <div>
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              placeholder="Email goes here..."
              name="email"
              type="text"
              onChange={this.handleChange}
            />
            <input
              placeholder="Password goes here..."
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <input value="SUBMIT" type="submit" />
          </form>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}

export default Login;
