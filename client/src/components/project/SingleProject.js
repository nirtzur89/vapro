import React, { Component } from "react";
import axios from "axios";

class SingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getTheProject();
  }

  getTheProject = () => {
    const { params } = this.props.match;
    axios
      .get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
          `/artists/${params.id}/projects/${params.projectId}`
      )
      .then(responseFromApi => {
        const theProject = responseFromApi.data;
        this.setState(theProject);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.artist}</p>
      </div>
    );
  }
}

export default SingleProject;
