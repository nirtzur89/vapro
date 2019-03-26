import React, { Component } from 'react';
import axios from 'axios';

class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { 
        artist: '',
        name: '',
        description: '',
        location: '',
        event:'',
        video: '',
        date:''
      }
  }
   
  handleFormSubmit = (e) => {
    e.preventDefault();
    const artist = this.state.artist;
    const name = this.state.name;
    const description = this.state.description;
    const location = this.state.location;
    const event = this.state.event;
    const video = this.state.video;
    const date = this.state.date;
    axios.post("http://localhost:5000/projects", { artist, name, description, location, event, video, date })
    .then( () => {
        // this.props.getData();
        this.setState({artist:"", name:"", description:"", location:"", event:"", video:"", date:""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (e) => {  
      const {name, value} = e.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Artist:</label>
          <input type="text" name="artist" value={this.state.artist} onChange={ e => this.handleChange(e)}/>

          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>

          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />

          <label>Location:</label>
          <input type="text" name="location" value={this.state.location} onChange={ e => this.handleChange(e)}/>

          <label>Event:</label>
          <input type="text" name="event" value={this.state.event} onChange={ e => this.handleChange(e)}/>

          <label>Upload:</label>
          <input type="file" name="upload" value={this.state.upload} onChange={ e => this.handleChange(e)}/>

          <label>Date:</label>
          <input type="date" name="date" value={this.state.date} onChange={ e => this.handleChange(e)}/>
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject;