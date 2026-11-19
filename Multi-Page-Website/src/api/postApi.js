import axios from "axios";

const api = axios.create({
  baseURL: "https://api.restcountries.com/countries/v5",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_REST_COUNTRIES_API_KEY}`,
  },
});

// HTTP GET method to fetch a list of countries
export const getCountryData = (limit = 50) => {
  return api.get("", {
    params: {
      limit,
    },
  });
};

// HTTP GET method to fetch an individual country by common name or query
export const getCountryIndData = (name) => {
  return api.get("", {
    params: {
      q: name,
      "names.common": name,
    },
  });
};
