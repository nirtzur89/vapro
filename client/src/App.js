import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/NavBar'
import DemoCarousel from './components/CuratorPick/CuratorPick'
import SignupForm from './components/Forms/SignupForm'
import LoginForm from './components/Forms/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <DemoCarousel/>
        <SignupForm/>
        <LoginForm/>
      </div>
    );
  }
}

export default App;
