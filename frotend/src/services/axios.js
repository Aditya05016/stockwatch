import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const loginRequest = (data) => {
    return axios.post(`${BASE_URL}/api/auth/login`, data);
};

export const RegisterRequest = (data) => {
    return axios.post(`${BASE_URL}/api/auth/register`, data);
}
export const GetWatchList = (token) => {
    return axios.get(`${BASE_URL}/api/watch/getwatchlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const AddWatchList = (data, token) => {
    return axios.post(`${BASE_URL}/api/watch/add`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  
  export const RemoveWatchList = (data, token) => {
    return axios.post(`${BASE_URL}/api/watch/deletelist`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  

