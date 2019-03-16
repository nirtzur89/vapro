import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


import Navbar from './components/navbar/NavBar'
import DemoCarousel from './components/CuratorPick/CuratorPick'
import SignupForm from './components/Auth/AuthForms/SignupForm'
import LoginForm from './components/Auth/AuthForms/LoginForm';
import Notfound from './components/Notfound'
import Artistlist from './components/Artists/Artistlist'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/" component={DemoCarousel} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/artistlist" component={Artistlist}/>
            <Route component={Notfound}/>
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
