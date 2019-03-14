import React, { Component } from 'react';
import './SignupForm.css';

class SignupForm extends Component {
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
                <form className="signupForm formDiv">
                    <div>
                        <input type="text" name="firstname" className="inputfield" placeholder="username"></input>
                    </div>
                    <div>
                        <input type="text" name="firstname" className="inputfield" placeholder="firstname"></input>
                    </div>
                    <div>
                        <input type="text" name="lastname" className="inputfield" placeholder="lastname"></input>
                    </div>
                    <div>
                        <input type="email" name="email" className="inputfield" placeholder="email"></input>
                    </div>
                    <div>
                        <input type="password" name="password1" className="inputfield" placeholder="password"></input>
                    </div>
                    <div>
                        <input type="password" name="password2" className="inputfield" placeholder="password"></input>
                    </div>
                    <button type="submit" className="btn">
                        Sign up
                    </button>


                </form>
            </div>
        )
    }
}

export default SignupForm;
