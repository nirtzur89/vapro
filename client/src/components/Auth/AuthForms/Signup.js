import React, { Component } from "react";
import AuthService from "../auth-service";
import "../Auth.css";
import { Link } from "react-router-dom";

class Signup extends Component {
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
      .signup(email, password)
      .then(response => {
        this.setState({
          email: "",
          password: ""
        });
        this.props.getUser(response);
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
          <div className="slide-right">Join us</div>
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
            <button type="submit">Signup</button>
            <label htmlFor="form-switch">
              <Link to={"/login"}>
                <span className="switch">Login</span>
              </Link>
            </label>
          </form>
        </div>
      </div>
    );
  }

  // render() {
  //   console.log("props", this.props);
  //   return (
  //     <div className="wrapperloginForm color-change-3x">
  //       <div className="col-md-6 mx-auto text-center">
  //         <div className="slide-right">Join us</div>
  //       </div>
  //       <div className="slide-right">
  //         <input type="checkbox" id="form-switch" />
  //         <form id="register-form" className="forms" action method="post">
  //           <input
  //             type="email"
  //             className="inputs"
  //             placeholder="Email"
  //             required
  //             name="email"
  //             value={this.state.email}
  //             onChange={e => this.handleChange(e)}
  //           />
  //           <input
  //             type="password"
  //             className="inputs"
  //             placeholder="Password"
  //             required
  //             name="password"
  //             value={this.state.password}
  //             onChange={e => this.handleChange(e)}
  //           />
  //           <button type="submit">Signup</button>
  //           <label htmlFor="form-switch">Already a Member? Login!</label>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
}

export default Signup;
