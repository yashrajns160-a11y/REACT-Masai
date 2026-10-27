import axios from "axios";

const api = axios.create({
  baseURL: "https://api.restcountries.com/countries/v5",
  headers: {
    Authorization: `Bearer ${
      import.meta.env.VITE_REST_COUNTRIES_API_KEY
    }`,
  },
});

export const getCountryData = (countryName = "Canada") => {
  return api.get(`/names.common/${encodeURIComponent(countryName)}`);
};