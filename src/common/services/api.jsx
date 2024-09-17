import axios from "axios";

const REST_API_BASE = "http://localhost:8080/";

const API = axios.create({
    baseURL: REST_API_BASE,
});

API.defaults.headers.common["Content-Type"] = "application/json";

export default API