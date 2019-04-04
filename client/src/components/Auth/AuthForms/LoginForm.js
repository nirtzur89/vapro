import React, { Component } from "react";
import AuthService from "../auth-service";
import { Link, withRouter } from "react-router-dom";
import "../Auth.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.service
      .login(email, password)
      .then(response => {
        this.setState({ email: "", password: "" });
        this.props.getUser(response);
        this.props.history.push("/Artistsignup");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log("props", this.props);
    return (
      <div className="wrapperloginForm color-change-3x">
        <div className="col-md-6 mx-auto text-center">
          <div className="slide-right">Log In</div>
        </div>
        <div className="slide-right">
          <input type="checkbox" id="form-switch" />
          <form
            id="login-form"
            className="forms"
            action
            method="post"
            onSubmit={this.handleFormSubmit}
          >
            <input
              type="text"
              className="inputs"
              placeholder="Email"
              required
              name="email"
              value={this.state.email}
              onChange={e => this.handleChange(e)}
            />
            <input
              type="password"
              className="inputs"
              placeholder="Password"
              required
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />

            <button type="submit">Login</button>

            <label htmlFor="form-switch">
              <Link to={"/signup"}>
                <span>SignUp</span>
              </Link>
            </label>
          </form>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
