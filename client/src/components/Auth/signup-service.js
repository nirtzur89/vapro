import axios from 'axios';

class SignupService {
  constructor() {
    let service = axios.create({
      baseURL: ((process.env.REACT_APP_API_URL || "http://localhost:3001/") + "/vot-visualartists"),
      withCredentials: true
    });
    this.service = service;
  }

  register = (artist, userName, firstName, lastName, email, password, password2) => {
    return this.service.post('/register', {artist, userName, firstName, lastName, email, password, password2})
    .then(response => response.data)
  }
}

export default SignupService;