import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


import Navbar from './components/bars/NavBar'
import Parent from './components/CuratorPick/CuratorPick'
import ArtistSignupForm from './components/Auth/AuthForms/ArtistSignupForm'
import MemberSignupForm from './components/Auth/AuthForms/MemberSignupForm'
import LoginForm from './components/Auth/AuthForms/LoginForm';
import Notfound from './components/Notfound'
import Artistlist from './components/SearchArtists/Artistlist'
import SignupButtons from './components/Auth/SignupButtons';
import AllProjects from './components/project/AllProjects'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Parent} />
            <Route exact path="/signup" component={SignupButtons} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/artistSignup" component={ArtistSignupForm} />
            <Route exact path="/memberSignup" component={MemberSignupForm} />
            <Route exact path="/artistlist" component={Artistlist}/>
            <Route exact path="/allprojects" component={AllProjects}/>
            <Route component={Notfound}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
