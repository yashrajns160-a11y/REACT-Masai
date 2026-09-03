
import axios from "axios";

export const getTodos = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5`)
}