import axios from 'axios';
// const baseUrl="http://localhost:3000/api/";
export const login = (username:string, password:string): Promise<any> => {
  console.log('login request');
  
  return axios.post('login', {username, password});
};
