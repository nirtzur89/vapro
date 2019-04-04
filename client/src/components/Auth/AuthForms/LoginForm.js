import React, { Component } from "react";
import AuthService from "../auth-service";
import { Link } from "react-router-dom";
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
        console.log("pressed", this.props);
        this.props.history.replace("/");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={e => this.handleChange(e)}
          />
          <label>Password:</label>
          <textarea
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Login" />
        </form>
        <p>
          Don't have account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  }
}
export default Login;

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     this.Auth = new AuthService();
//   }

//   handleFormSubmit(e) {
//     e.preventDefault();

//     this.Auth.login(this.state.email, this.state.password)
//       .then(res => {
//         this.props.history.replace("/me");
//       })
//       .catch(err => {
//         alert(err);
//       });
//   }

//   componentWillMount() {
//     if (this.Auth.loggedIn()) this.props.history.replace("/me");
//   }

//   render() {
//     console.log("props", this.props);
//     return (
//       <div className="loginForm formDiv">
//         <div>
//           <h1>Login</h1>
//           <form onSubmit={this.handleFormSubmit}>
//             <input
//               placeholder="Email goes here..."
//               name="email"
//               type="text"
//               onChange={this.handleChange}
//             />
//             <input
//               placeholder="Password goes here..."
//               name="password"
//               type="password"
//               onChange={this.handleChange}
//             />
//             <input value="SUBMIT" type="submit" />
//           </form>
//         </div>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }
// }
