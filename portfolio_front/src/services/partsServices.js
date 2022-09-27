import axios from "axios";
const PARTS_URL = "http://localhost:8080/parts/";

// add part
export async function addPart(data, header) {
  await axios
    .post(`${PARTS_URL}`, data, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    })
    .then((response) => {
      return response;
    });
}
