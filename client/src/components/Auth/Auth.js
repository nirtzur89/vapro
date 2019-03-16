import React, { Component } from 'react';
import './Auth.css';

import SignupForm from './AuthForms/SignupForm';
// import LoginForm from './AuthForms/LoginForm';

const auth = () => {
return(
    <div>
        <SignupForm/>
        {/* <LoginForm/> */}
    </div>

)
}

export default auth;