import axios from "axios";
import CONFIG from "./../APP_CONFIG";
import Storage from "./localstorage";

const BASE_URL = CONFIG.BACKEND;

const mountHeader = (token, params, method = "GET") => {
  return {
    method,
    headers: { "x-auth": token },
    params
  };
};

const formatResponse = ({ data }) => {
  return data;
};

const formatCatch = error => {
  return error;
};

const promiseFactory = async (endpoint, args = {}, method = "get") => {
  // const { token } = await Storage.getKey();
  const token = "";
  const params = mountHeader(token, args, method.toUpperCase());
  return axios[method](`${BASE_URL}/${endpoint}`, { ...params })
    .then(response => formatResponse(response))
    .catch(error => formatCatch(error));
};

const postPromiseFactory = async (endpoint, args = {}, method = "post") => {
  // const { token } = await Storage.getKey();
  const token = "";
  const params = mountHeader(token, method.toUpperCase());
  return axios[method](`${BASE_URL}/${endpoint}`, { ...args }, { ...params })
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
      console.log("okkkk");
      return resolve(response);
    } catch (error) {
      return reject(error.response.data);
    }
  });
};
