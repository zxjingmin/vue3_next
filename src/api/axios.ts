/*
 * @Author: 邵明
 * @Date: 2022-02-02 16:32:29
 * @Last Modified by: 邵明
 * @Last Modified time: 2022-02-03 12:51:15
 */

import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';
export default (): AxiosStatic => {
  axios.defaults.validateStatus = function (status: number) {
    return (
      (status >= 200 && status < 300) ||
      status === 500 ||
      status === 401 ||
      status === 403 ||
      status === 422
    );
  };

  axios.interceptors.request.use(
    function (config: AxiosRequestConfig): AxiosRequestConfig {
      config.baseURL = '/api/';
      axios.defaults.withCredentials = false;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      console.log('request success' + JSON.stringify(response));

      if (response.status == 200 && response.data.success) {
        return Promise.resolve(response.data.data);
      }
    },
    (error) => {
      console.log('network fail');
    }
  );
  return axios;
};
