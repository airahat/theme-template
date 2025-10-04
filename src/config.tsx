import axios from "axios";

const baseApiUrl ="http://localhost/php_react-api/api/";

const api = axios.create({
    baseURL: baseApiUrl
})

export default api;