import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProjectService from "./project-service";
import withAuth from "../../components/Auth/withAuth";
import AuthService from "../../components/Auth/auth-service";

//const Auth = new ProjectService();

class MySingleProject extends Component {
  constructor(props) {
    super(props);
    this.state = { project: null };
    this.service = new ProjectService();
    this.Auth = new AuthService();
  }

  getProject = () => {
    const path = this.props.history.location.pathname;
    console.log("props", this.props);
    axios
      .get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
          `projects/${path}`,
        {
          headers: {
            authorization: this.Auth.getToken()
          }
        }
      )
      .then(project => {
        console.log("thethethe", project);
        this.setState({
          project: project
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getProject();
  }
  //   deleteProject = () => {
  //     axios
  //       .delete(
  //         (process.env.REACT_APP_API_URL || "http://localhost:5000") +
  //           `/projects/${}`,
  //         {
  //           headers: {
  //             authorization: this.Auth.getToken()
  //           }
  //         }
  //       )
  //       .then(() => {
  //         this.props.history.push("/myprojects");
  //         console.log(el);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };

  render() {
    console.log("stateeeee", this.state);
    return <div>hey {this.state.name}</div>;
  }
}
export default withAuth(MySingleProject);