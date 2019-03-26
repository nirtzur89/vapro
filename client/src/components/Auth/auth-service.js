import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/',
      withCredentials: true
    });
    this.service = service;
  }

 loginForm = (email, password) => {
    return this.service.post('/login', {email, password})
    .then(response => response.data)
  }
}

export default AuthService;