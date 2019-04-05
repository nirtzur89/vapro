import React, { Component } from "react";
import AuthService from "../Auth/auth-service";
import axios from "axios";

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.theProfile.userName,
      email: this.props.theProfile.email,
      password: this.props.theProfile.email,
      nationality: this.props.theProfile.nationality,
      bio: this.props.theProfile.nationality,
      techniques: this.props.theProfile.techniques,
      company: this.props.theProfile.company,
      website: this.props.theProfile.website
      //   vimeo: this.props.theProfile.social.vimeo,
      //   pinterest: this.props.theProfile.social.pinterest,
      //   youtube: this.props.theProfile.social.youtube,
      //   instagram: this.props.theProfile.social.instagram,
      //   facebook: this.props.theProfile.social.facebook
    };
    //this.Auth = new AuthService();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = event => {
    const userName = this.state.userName;
    const bio = this.state.bio;
    const techniques = this.state.techniques;
    const website = this.state.website;
    const nationality = this.state.nationality;
    // const vimeo = this.state.social.vimeo;
    //const pinterest = this.state.social.pinterest;

    event.preventDefault();

    axios
      .put(
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
          `/artists/${this.props.theProfile._id}`,
        { userName, bio, techniques, website, nationality },
        { withCredentials: true }
        // {
        //   headers: {
        //     authorization: this.Auth.getToken()
        //   }
        // }
      )
      .then(() => {
        console.log("proppppps", this.props);
        //this.props.getTheProfile();
        //this.props.history.push("/artistlist");
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log("PROPS!!", this.props);
    return (
      <div>
        <h1>Edit Profile</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            name="userName"
            type="text"
            value={this.state.userName}
            onChange={e => this.onChange(e)}
          />
          <label>Bio:</label>
          <textarea
            name="bio"
            value={this.state.bio}
            onChange={e => this.onChange(e)}
          />
          <label>Techniques:</label>
          <input
            name="techniques"
            type="text"
            value={this.state.techniques}
            onChange={e => this.onChange(e)}
          />
          <label>Website:</label>
          <input
            name="website"
            type="text"
            value={this.state.website}
            onChange={e => this.onChange(e)}
          />
          <label>Homebase:</label>
          <input
            name="nationality"
            type="text"
            value={this.state.nationality}
            onChange={e => this.onChange(e)}
          />
          {/* <h3>Social Media</h3>
                    <label>Vimeo:</label>
                    <input type="text" value={this.state.social.vimeo} onChange={e => this.onChange(e)} />
                    <label>Pinterest:</label>
                    <input type="text" value={this.state.social.pinterest} onChange={e => this.onChange(e)} /> */}

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EditProfile;
