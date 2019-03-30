import axios from "axios";
import AuthService from "../../components/Auth/auth-service";

class ProjectService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/",
      withCredentials: true
    });
    this.authService = new AuthService();
  }

  addProject = (artist, name, description, location, event, video, date) => {
    return (
      this.service
        // .get("/projects/test",
        // })
        .post(
          "/projects",
          {
            artist,
            name,
            description,
            location,
            event,
            video,
            date
          },
          {
            headers: {
              authorization: this.authService.getToken()
            }
          }
        )
        .then(response => response.data)
    );
  };
}

export default ProjectService;
