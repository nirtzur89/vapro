import React, { Component } from "react";
import AuthService from "../../components/Auth/auth-service";
import withAuth from "../../components/Auth/withAuth";

const Auth = new AuthService();

class Profile extends Component {
  // This method that we create in the AuthService will clear the token from localStorage.
  handleLogout() {
    Auth.logout();
    this.props.history.replace("/");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome {this.props.user.userName}</h2>
          <h2>Welcome {this.props.user.password}</h2>
        </div>
        <h1>Your Profile</h1>
        <p>username</p>
        <p className="App-intro">
          <button
            type="button"
            className="form-submit"
            onClick={this.handleLogout.bind(this)}
          >
            Logout
          </button>
        </p>
      </div>
    );
  }
}

export default withAuth(Profile);
