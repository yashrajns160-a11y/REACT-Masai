
import axios from "axios";

export const getCities = ({ page, limit }) => {
    // return axios.get(`https://jsonplaceholder.typicode.com/users`)
    // return axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`)
    // there is a cleaner way use params
    return axios.get(`https://jsonplaceholder.typicode.com/users`, {
        params: {
            _page: page,
            _limit: limit
        }
    }
    )
}

// config object ---

/*
axios(URL , {
params: {
    ID:2,
   }
})
*/