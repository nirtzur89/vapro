import React, { Component } from 'react';
import AuthService from '../auth-service';
import '../Auth.css';


class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    handleFormSubmit(e){
        e.preventDefault();
      
        this.Auth.login(this.state.email,this.state.password)
            .then(res =>{
               this.props.history.replace('/profile');
            })
            .catch(err =>{
                alert(err);
            })
    }

    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/profile');
    }

    render() {
        return (
            <div className="loginForm formDiv">
                <div>
                    <h1>Login</h1>
                    <form>
                        <input
                            placeholder="Email goes here..."
                            name="Email"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;

// class Login extends Component {
//   constructor(props){
//     super(props);
//     this.state = { email: '', password: '' };
//     this.service = new AuthService();
//   }

//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     const email = this.state.email;
//     const password = this.state.password;
//     this.service.login(email, password)
//     .then( response => {
//         this.setState({ email: "", password: "" });
//         this.props.getUser(response)
//         const {token} = response.data;
//         localStorage.setItem('jwt token', token);
//         setAuthToken(token);
//         const decoded = jwt_decode(token);
//         dispatchEvent(setCurrentUser(decoded))
//     })
//     .catch( error => console.log(error) )
//   }
  
  

//   handleChange = (event) => {  
//     const {name, value} = event.target;
//     this.setState({[name]: value});
//   }
    
//   render(){
//     return(
//         <div>
//         <form className="loginForm formDiv" onSubmit={this.handleFormSubmit}>
//             <div>
//                 <input type="email" name="email" value={this.state.email} className="inputfield" placeholder="email" onChange={e => this.handleChange(e)}></input>
//             </div>
//             <div>
//                <input type="password" name="password" value={this.state.password} className="inputfield" placeholder="password" onChange={e => this.handleChange(e)}></input>
//              </div>
//                 <button type="submit" className="btn">
//                         Login
//                 </button>
//         </form>
//         <p>Don't have account? 
//             <Link to={"/signup"}> Signup</Link>
//         </p>
//       </div>
//     )
//   }
// }

// export default Login;