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
              <h2>MyProfile</h2>
          </div>
          
          <p>username: {this.props.user.userName}</p>
          <p>Email: {this.props.user.email}</p>
          <p className="App-intro">
            <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>

        </p>
      </div>
    );
  }
}

export default withAuth(Profile);
