import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar/NavBar'
import DemoCarousel from './components/CuratorPick/CuratorPick'
// import Auth from './components/Auth/Auth';
import SignupForm from './components/Auth/AuthForms/SignupForm'
import LoginForm from './components/Auth/AuthForms/LoginForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <DemoCarousel />
        <SignupForm/>
        <LoginForm/>
      </div>
    );
  }
}

export default App;
