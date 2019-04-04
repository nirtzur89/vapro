import React, { Component } from "react";
import AuthService from "./components/Auth/auth-service";
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// import ProtectedRoute from './components/Auth/protected-route';
import Navbar from "./components/bars/NavBar";
import Parent from "./components/CuratorPick/CuratorPick";
import ArtistSignupForm from "./components/Auth/AuthForms/ArtistSignupForm";
import Signup from "./components/Auth/AuthForms/Signup";
import LoginForm from "./components/Auth/AuthForms/LoginForm";
import Notfound from "./components/Notfound";
import Artistlist from "./components/SearchArtists/Artistlist";
import AllProjects from "./components/project/AllProjects";
import AddProject from "./components/project/AddProject";

import MyProjects from "./components/project/MyProjects";
import PublicProfile from "./components/profile/PublicProfile";
import PrivateProfile from "./components/profile/PrivatProfile";
import PrivatProfile from "./components/profile/PrivatProfile";
import SingleProject from "./components/project/SingleProject";

//<Route exact path="/addproject" component={AddProject} userInSession={this.state.loggedInUser}/>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />

          <Switch>
            <Route exact path="/" component={Parent} />
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/login"
              render={() => <LoginForm getUser={this.getTheUser} />}
            />
            <Route exact path="/Artistsignup" component={ArtistSignupForm} />}
            />
            <Route exact path="/artistlist" component={Artistlist} />
            <Route exact path="/allprojects" component={AllProjects} />
            <Route exact path="/addproject" component={AddProject} />
            <Route
              exact
              path="/artists/:id/projects/:projectId"
              component={SingleProject}
            />
            <Route exact path="/myprojects" component={MyProjects} />
            <Route exact path="/artists/:id" component={PublicProfile} />
            <Route exact path="/myprofile" component={PrivatProfile} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
