
import axios from "axios";

export const getCities = ({ page, limit, sort, order }) => {
    // return axios.get(`https://jsonplaceholder.typicode.com/users`)
    // return axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`)
    // there is a cleaner way use params
    return axios.get(`https://jsonplaceholder.typicode.com/users`, {
        params: {
            _page: page,
            _limit: limit,
            _sort: sort,
            _order: order
        }
    }
    )
}

export const addCity = (data) => {
    return axios.post(`https://jsonplaceholder.typicode.com/users`, {
        name: data.name,
        city : data.city
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