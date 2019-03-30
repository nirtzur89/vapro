import React, { Component } from "react";
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/bars/NavBar";
import Parent from "./components/CuratorPick/CuratorPick";
import ArtistSignupForm from "./components/Auth/AuthForms/ArtistSignupForm";
import MemberSignupForm from "./components/Auth/AuthForms/MemberSignupForm";
import LoginForm from "./components/Auth/AuthForms/LoginForm";
import Notfound from "./components/Notfound";
import Artistlist from "./components/SearchArtists/Artistlist";
import SignupButtons from "./components/Auth/SignupButtons";
import AllProjects from "./components/project/AllProjects";
import AddProject from "./components/project/AddProject";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
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
            <Route exact path="/signup" component={SignupButtons} />
            <Route
              exact
              path="/login"
              render={() => <LoginForm getUser={this.getTheUser} />}
            />
            <Route exact path="/artistSignup" component={ArtistSignupForm} />
            <Route exact path="/memberSignup" component={MemberSignupForm} />
            <Route exact path="/artistlist" component={Artistlist} />
            <Route exact path="/allprojects" component={AllProjects} />
            <Route exact path="/addproject" component={AddProject} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
