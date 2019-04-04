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
      <div className="wrapperloginForm color-change-3x">
        <div className="col-md-6 mx-auto text-center">
          <div className="slide-right">Join us</div>
        </div>
        <div className="slide-right">
          <input type="checkbox" id="form-switch" />
          <form id="login-form" className="forms" action method="post">
            <input
              type="text"
              className="inputs"
              placeholder="Username"
              required
            />
            <input
              type="password"
              className="inputs"
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
            <label htmlFor="form-switch">
              <span>Register</span>
            </label>
          </form>
          <form id="register-form" className="forms" action method="post">
            <input
              type="text"
              className="inputs"
              placeholder="Username"
              required
            />
            <input
              type="email"
              className="inputs"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="inputs"
              placeholder="Password"
              required
            />
            <input
              type="password"
              className="inputs"
              placeholder="Password"
              required
            />
            <button type="submit">Register</button>
            <label htmlFor="form-switch">Already a Member? Sign In!</label>
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
