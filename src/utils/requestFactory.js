import axios from 'axios';
import CONFIG from './../APP_CONFIG';
import Storage from './../services/localstorage';
import _get from 'lodash/get';

const BASE_URL = CONFIG.BACKEND;

const mountHeader = (token, params, method = 'GET') => {
  return {
    method,
    headers: { 'x-auth': token },
    params
  };
};

const swithMethod = (method, endpoint, args = {}, params) => {
  const switchMethodsMap = {
    post: () => axios[method](`${BASE_URL}/${endpoint}`, args, params),
    put: () => axios[method](`${BASE_URL}/${endpoint}`, args, params),
    else: () => axios[method](`${BASE_URL}/${endpoint}`, params)
  };

  return switchMethodsMap[method] || switchMethodsMap['else'];
};

const promiseFactory = (
  endpoint,
  args = {},
  method = 'get',
  withToken = true
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { token = '' } = withToken && (await Storage.getKey());
      const params = mountHeader(token, args, method.toUpperCase());
      let mountRequest = swithMethod(method, endpoint, args, params);
      const response = await mountRequest();
      const data = _get(response, 'data', false);
      return resolve(data || response);
    } catch (error) {
      // return reject(e)
      // throw Error(error);
      return reject(error);
    }
  });
};

export default promiseFactory;
