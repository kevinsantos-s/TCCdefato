import axios from "axios";
const API_URL = "http://localhost:8080/";

const mainInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});
const httpCommon = { mainInstance }

export default httpCommon;