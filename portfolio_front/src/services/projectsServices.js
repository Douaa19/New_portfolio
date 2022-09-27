import axios from "axios";
const PROJECTS_URL = "http://localhost:8080/projects/";

// add project
export async function addProject(data, header) {
  await axios
    .post(`${PROJECTS_URL}`, data, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    })
    .then((response) => {
      return response;
    });
}

// delete project
export async function deleteProject(id, header) {
    console.log(id)
//   await axios
//     .delete(`${PROJECTS_URL}${id}`, {
//       headers: {
//         Authorization: `Bearer ${header}`,
//       },
//     })
//     .then((response) => {
//       console.log(response.data);
//     });
}
