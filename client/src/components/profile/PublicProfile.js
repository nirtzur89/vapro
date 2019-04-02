import React, { Component } from "react";

import axios from "axios";

class PublicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { User: {} };
  }



  getUser = () => {
    axios
      .get((process.env.REACT_APP_API_URL || "http://localhost:5000") + `${this.props.history.location.pathname}`)
      .then(responseFromApi => {
        this.setState({
          user: responseFromApi.data[0]
        });
      });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    console.log("state.user!dknvdjbvkjwb", this.state);
    console.log('PROPS', this.props.history.location.pathname)

    return (
      <div className="App">
        <div className="App-header">
          <h2>MyProfile</h2>
          <p>username: {this.state.User.userName}</p>
          <p>Email: {this.state.User.email}</p>
        </div>
      </div>
    );
  }
}

export default PublicProfile;
