import axios from "axios";
const INFOS_URL = "http://localhost:8080/infos/";

// add info
export async function addInfo(data, header) {
  await axios
    .post(`${INFOS_URL}`, data, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    })
    .then((response) => {
      return response;
    });
}

// delete info
export async function deleteInfo(Id, header) {
  await axios
    .delete(`${INFOS_URL}${Id}`, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    })
    .then((response) => {
      return response;
    });
}
