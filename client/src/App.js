import React, { Component } from "react";
import AuthService from "./components/Auth/auth-service";
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// import ProtectedRoute from './components/Auth/protected-route';
import Navbar from "./components/bars/NavBar";
import Parent from "./components/CuratorPick/CuratorPick";
import ArtistSignupForm from "./components/Auth/AuthForms/ArtistSignupForm";

import LoginForm from "./components/Auth/AuthForms/LoginForm";
import Notfound from "./components/Notfound";
import Artistlist from "./components/SearchArtists/Artistlist";
import AllProjects from "./components/project/AllProjects";
import AddProject from "./components/project/AddProject";
import MyProjects from "./components/project/MyProjects";
import Profile from "./components/profile/Profile";

//<Route exact path="/addproject" component={AddProject} userInSession={this.state.loggedInUser}/>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
          console.log(this.state.loggedInUser);
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
          <div className="tracking-out-expand">
            <h1>VOR</h1>
          </div>

          <Navbar />

          <Switch>
            <Route exact path="/" component={Parent} />
            <Route exact path="/login" component={LoginForm} />
            <Route
              exact
              path="/signup"
              render={() => <ArtistSignupForm getUser={this.getTheUser} />}
            />
            <Route exact path="/artistlist" component={Artistlist} />
            <Route exact path="/allprojects" component={AllProjects} />
            <Route exact path="/addproject" component={AddProject} />
            <Route exact path="/myprojects" component={MyProjects} />
            <Route exact path="/me" component={Profile} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
//<Route exact path="/signup" component={SignupButtons} />
export default App;
