import React, { Component } from 'react';
import axios from 'axios';
//import SearchBar from '../SearchArtists/SearchBar';

class ProjectsList extends Component {
  constructor(props){
      super(props)
      this.state = { listOfProjects: [] }
    }
  
    getAllProjects = () =>{
      axios.get((process.env.REACT_APP_API_URL || "http://localhost:5000") + "/projects")
      .then(responseFromApi => {
        this.setState({
          listOfProjects: responseFromApi.data
        })
      })
    }
  
    componentDidMount() {
      this.getAllProjects();
    }


    render(){
        return(
          <div>
            <div style={{width: '60%', float:"left"}}>
              { this.state.listOfProjects.map( project => {
                return (
                  <div key={project._id}>
                      <h3>{project.name}</h3>
                    {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
                  </div>
                )})
              }
            </div>
            <div style={{width: '40%', float:"right"}}>
            
            </div>
          </div>
        )
      }
    }
    

export default ProjectsList;