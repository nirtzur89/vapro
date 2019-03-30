import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import AuthService from '../../components/Auth/auth-service';
import withAuth from '../../components/Auth/withAuth';

const Auth = new AuthService();

class AddProject extends Component {
  constructor(props){
      super(props);
      this.state = { 
        loggedInUser: null,
        artist: '',
        name: '',
        description: '',
        location: '',
        event:'',
        video: '',
        date:''
      }
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log("willreceiveprops")
  //   this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
  // }
   
  handleFormSubmit = (e) => {
    e.preventDefault();
    const artist = this.state.artist;
    const name = this.state.name;
    const description = this.state.description;
    const location = this.state.location;
    const event = this.state.event;
    const video = this.state.video;
    const date = this.state.date;
    axios.post("http://localhost:5000/projects", 
    { artist, name, description, location, event, video, date },
    {withCredentials:true})
    .then( () => {
        this.props.getData();
        this.setState({artist:"", name:"", description:"", location:"", event:"", video:"", date:""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (e) => {  
      const {name, value} = e.target;
      this.setState({[name]: value});
  }

      handleLogout(){
        Auth.logout()
        this.props.history.replace('/');
      }

  render(){
    return(
      <div>
        <h1>adding a project for {this.props.user.userName}</h1>
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

export default withAuth(AddProject);