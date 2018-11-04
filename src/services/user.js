import axios from "axios";
import CONFIG from "./../APP_CONFIG";
import promiseFactory from "../utils/requestFactory";

const BASE_URL = CONFIG.BACKEND;

export const CreateUser = async user => {
  return await promiseFactory("create-user", user, "post");
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
