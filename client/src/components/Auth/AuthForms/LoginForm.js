import React, { Component } from 'react';
import '../Auth.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }

    }

    render() {
        return (
            <div>
                <form className="loginForm formDiv">
                    <div>
                        <input type="email" name="email" className="inputfield" placeholder="email"></input>
                    </div>
                    <div>
                        <input type="password" name="password" className="inputfield" placeholder="password"></input>
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
