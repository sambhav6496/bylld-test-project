import axios from "axios";

const url = "http://localhost:3000/shipments/";

export const data = () => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.message;
    });
};

export const getShipmentById = (id) => {
  return axios
    .get(`${url + id}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      return error.message;
    });
};
