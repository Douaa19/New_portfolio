import axios from "axios";
const TECHNOS_URL = "http://localhost:8080/technos/";

// get echnos

// delete techno
export async function deleteTechno(Id, header) {
  await axios
    .delete(`${TECHNOS_URL}${Id}`, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    })
    .then((response) => {
      return response;
    });
}

// add techno
export async function addTechno(data, header) {
    await axios
      .post(`${TECHNOS_URL}`, data, {
        headers: {
          Authorization: `Bearer ${header}`,
        },
      })
      .then((response) => {
        return response.data;
      });
}
