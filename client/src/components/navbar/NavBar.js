import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './Navbar.css';

const navbar = () => {
    return (

        <nav className="navbar navbar-light light-blue lighten-4">
            <a className="navbar-brand" href="#">VOR</a>
           <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                    className="fas fa-bars fa-1x"></i></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Signup<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Artists</a>
                    </li>
                </ul>


            </div>


        </nav>

    )
}

export default navbar;