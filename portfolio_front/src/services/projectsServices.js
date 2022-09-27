import axios from "axios";
const PROJECTS_URL = "http://localhost:8080/projects/";

// add project
export async function addProject(data, header) {
    await axios
      .post(`${PROJECTS_URL}`,data, {
        headers: {
          Authorization: `Bearer ${header}`,
        },
      })
      .then((response) => {
        return response;
      });
  }


