import React, { Component } from "react";
import AuthService from "../../components/Auth/auth-service";
import withAuth from "../../components/Auth/withAuth";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [] };
    this.Auth = new AuthService();
    // this.handleChange = this.handleChange.bind(this);
    //this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  getUser = () => {
    axios
      .get((process.env.REACT_APP_API_URL || "http://localhost:5000") + "/user")
      .then(responseFromApi => {
        this.setState({
          user: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getUser();
  }

  // This method that we create in the AuthService will clear the token from localStorage.
  handleLogout() {
    this.Auth.logout();
    this.props.history.replace("/");
  }

  render() {
    console.log("state!", this.state.user);
    const activeUser = this.props.user.id;
    return (
      <div className="App">
        <div className="App-header">
          <h2>MyProfile</h2>
        </div>
        <div>
          {this.state.user.map(user => {
            if (user._id === activeUser) {
              return (
                <div>
                  <p>username: {user.userName}</p>
                  <p>Email: {user.email}</p>
                </div>
              );
            }
          })}
        </div>
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
