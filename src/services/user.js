import axios from "axios";
import CONFIG from "./../APP_CONFIG";

const BASE_URL = CONFIG.BACKEND;

const formatResponse = ({ data }) => {
  return data;
};

const formatCatch = error => {
  return error;
};

const postPromiseFactory = async (endpoint, args = {}, method = "post") => {
  return axios[method](`${BASE_URL}/${endpoint}`, { ...args })
    .then(response => formatResponse(response))
    .catch(error => formatCatch(error));
};

export const CreateUser = async user => {
  return await postPromiseFactory("create-user", user);
};

export const Login = user => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, user);
      return resolve(response);
    } catch (error) {
      return reject(error.response.data);
    }
  });
};

export const ValidateToken = ({ token }) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!token) {
        return reject("Token não fornecido.");
      }
      const { data } = await axios.post(`${BASE_URL}/token`, { token });
      return resolve(data);
    } catch ({ response = {} }) {
      const { data } = response;
      return reject(data);
    }
  });
};
