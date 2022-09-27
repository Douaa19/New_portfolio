import axios from "axios";
const SERVICES_URL = "http://localhost:8080/services/";

// add service
export async function addService(data, header) {
  await axios
    .post(`${SERVICES_URL}`,data, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    })
    .then((response) => {
      return response.data;
    });
}
