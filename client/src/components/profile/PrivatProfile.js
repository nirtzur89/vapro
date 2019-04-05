// import React, { Component } from "react";
// import AuthService from "../Auth/auth-service";
// import withAuth from "../Auth/withAuth";
// import axios from "axios";
// import EditProfile from "./EditProfile";
// import { Link } from "react-router-dom";

// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { user: null };
//     this.Auth = new AuthService();
//   }

//   getArtist = () => {
//     const { params } = this.props.match;
//     axios
//       .get(
//         (process.env.REACT_APP_API_URL || "http://localhost:5000") +
//         `/artists/${params.id}`,
//         { withCredentials: true }
//         // {
//         //   headers: {
//         //     authorization: this.Auth.getToken()
//         //   }
//         // }
//       )
//       .then(responseFromApi => {
//         this.setState({
//           user: responseFromApi.data
//         });
//         console.log("give me user", this.state.user);
//       });
//   };

//   componentDidMount() {
//     this.getUser();
//   }

//   // This method that we create in the AuthService will clear the token from localStorage.
//   handleLogout() {
//     this.Auth.logout();
//     this.props.history.replace("/");
//   }

//   render() {
//     if (!this.state.user) return <h1>Loading...</h1>;
//     console.log('userinSession', this.props.userInSession);
//     console.log('user.state', this.state.user)

//     return (
//       <div className="App">
//         <div className="App-header">
//           <h2>MyProfile</h2>
//           <p>username: {this.state.user.userName}</p>
//           <p>Email: {this.state.user.email}</p>
//           <p>Bio: {this.state.user.bio}</p>
//           <p>Website: {this.state.user.website}</p>
//           <p>Techniques: {this.state.user.techniques}</p>
//           <p>Homebase: {this.state.user.nationality}</p>
//         </div>
//         <div>
//         {(this.props.userInSession.id === this.state.user.id ) ? (<EditProfile theUser={this.state.user} getTheUser={this.getUser} />) : (<div></div>)}
          
//         </div>
//         <Link to={"/"}>BackToLandingPage</Link>
//         <button
//           type="button"
//           className="form-submit"
//           onClick={this.handleLogout.bind(this)}
//         >
//           Logout
//         </button>
//       </div>
//     );
//   }
// }

// export default withAuth(Profile);
