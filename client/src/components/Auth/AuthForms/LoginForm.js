import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom'; 
import '../Auth.css';
import axios from 'axios';


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;

        axios.post("http://localhost:5000/login", { email: email, password: password })
        .then(() => {
            // this.props.getData()
            this.props.history.push('/')

        })
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        console.log("props",this.props)
        return (
            <div>
                <form className="loginForm formDiv" onSubmit={this.handleFormSubmit}>
                    <div>
                        <input type="email" name="email" value={this.state.email} className="inputfield" placeholder="email" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <div>
                        <input type="password" name="password" value={this.state.password} className="inputfield" placeholder="password" onChange={e => this.handleChange(e)}></input>
                    </div>
                    <button type="submit" className="btn">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

export default LoginForm;
