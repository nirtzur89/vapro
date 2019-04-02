import React, { Component } from "react";

import axios from "axios";

class PublicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
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
    console.log("state.user!", this.state.user);
    console.log('PROPS', this.props.history.location.pathname)

    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.user.userName}</h2>
          <p>location: {this.state.user.nationality}</p>
          <p>Email: {this.state.user.email}</p>
        </div>
      </div>
    );
  }
}

export default PublicProfile;
