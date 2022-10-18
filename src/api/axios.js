import axios from 'axios';
// const BASE_URL = 'http://localhost:3500';
const BASE_URL = "https://calm-temple-27978.herokuapp.com";

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({  //sends req with necessary credentials
    baseURL: BASE_URL,
    headers: {'Content-Type': 'Application/json'},
    withCredentials: true
})

