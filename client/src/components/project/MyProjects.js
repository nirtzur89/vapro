import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProjectService from "./project-service";
import withAuth from "../../components/Auth/withAuth";
import AuthService from "../../components/Auth/auth-service";

//const Auth = new ProjectService();

class MyProjects extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfProjects: [] };
    this.service = new ProjectService();
    this.Auth = new AuthService();
    // this.handleChange = this.handleChange.bind(this);
    //this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  getAllProjects = () => {
    axios
      .get(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
          "/projects/myprojects",
        {
          headers: {
            authorization: this.Auth.getToken()
          }
        }
      )
      .then(responseFromApi => {
        this.setState({
          listOfProjects: responseFromApi.data
        });
      });
  };

  deleteProject = el => {
    axios
      .delete(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
          `/projects/${el}`,
        {
          headers: {
            authorization: this.Auth.getToken()
          }
        }
      )
      .then(() => {
        this.props.history.push("/myprojects"); // !!!
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllProjects();
  }

  render() {
    const activeUser = this.props.user.id;
    console.log("params", this.props);
    return (
      <div>
        <h2>{activeUser}</h2>
        <div>
          {this.state.listOfProjects.map(project => {
            console.log("params in", this.state);
            return (
              <div key={project._id}>
                <h3>{project.name}</h3>
                <button onClick={() => this.deleteProject(project._id)}>
                  Delete project
                </button>
                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
              </div>
            );
          })}
        </div>
        <p>Artist: </p>
      </div>
    );
  }
}

export default withAuth(MyProjects);
