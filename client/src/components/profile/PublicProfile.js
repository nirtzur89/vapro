import React, { Component } from "react";
import withAuth from "../Auth/withAuth";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }
  getUser = () => {
    axios
      .get((process.env.REACT_APP_API_URL || "http://localhost:5000") + `/user/artist/:id`)
      .then(responseFromApi => {
        this.setState({
          user: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    console.log("state!", this.state);
    console.log('PROPS', this)

    return (
      <div className="App">
        <div className="App-header">
          <h2>MyProfile</h2>
          <p>username: {this.state.user.userName}</p>
          <p>Email: {this.state.user.email}</p>
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
