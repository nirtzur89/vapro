import React, { Component } from 'react';

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
  
  render(){
    return (
        <div>
        <form onSubmit={this.handleFormSubmit}>
            <label>Artist:</label>
            <input type="text" name="artist" value={this.state.artist} />
  
            <label>Project Name:</label>
            <input type="text" name="name" value={this.state.name} />

            <label>description:</label>
            <input type="text" name="description" value={this.state.description} />
  
            <label>Location:</label>
            <input type="text" name="location" checked={this.state.location} />
            
            <label>Event:</label>
            <input type="text" name="event" value={this.state.event} />
            
            <label>Video:</label>
            <input type="file" name="video" value={this.state.video} />

            <label>Date:</label>
            <input type="date" name="date" value={this.state.date} />

            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddProject;