import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]})
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }
    
  render(){
    if(this.state.loggedInUser){
        return(
          <nav className="nav-style">
            <ul>
              <li>Welcome, {this.state.loggedInUser.username}</li>
              <li><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
              <li>
                <Link to='/'>
                  <button onClick={() => this.logoutUser()}>Logout</button>
                </Link>
              </li>
            </ul>
          </nav>
        )
      } else {
        return ( 
          <nav className="nav-style">
            <ul>
              <li><Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></li>
              <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
            </ul>
          </nav>
        )
      }
    }
  }

export default Profile;