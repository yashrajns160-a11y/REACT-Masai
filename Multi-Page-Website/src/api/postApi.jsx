import axios from "axios";

const api = axios.create({
  baseURL: "https://api.restcountries.com/countries/v5",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
  },
});

// GET method
export const getCountryData = () => {
  return api.get("", {
    params: {
      limit: 25,
    },
  });
};

//HTTP GET method for the individual country name
export const getCountryIndData = (name) => {

  return api.get("", {
    params: {
      "names.common": name,
    }
  })
}
// POST method (for APIs that support creating data)
export const createData = (url, data) => {
  return axios.post(url, data);
};