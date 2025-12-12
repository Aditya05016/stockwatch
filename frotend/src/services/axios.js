import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const loginRequest = (data) => {
    return axios.post(`${BASE_URL}/api/auth/login`, data);
};
