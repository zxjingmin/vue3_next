import axios from 'axios';

/*
{
  "additionalInformation":
    {
      "user_info":{
        "username":"admin",
        "enabled":true,
        "authorities":[
          {"authority":"ROLE_ADMIN"},
          {"authority":"ROLE_MANAGE"},
          {"authority":"ROLE_USER"},
          {"authority":"ROLE_ACTIVITI_USER"},
          {"authority":"ROLE_ACTIVITI_ADMIN"},
          {"authority":"auth_user"},
          {"authority":"profile_change_password"},
          {"authority":"auth_permission"},
          {"authority":"auth_department"},
          {"authority":"auth"},
          {"authority":"profile_info"},
          {"authority":"profile"},
          {"authority":"auth_roLe"}
        ],
        "loginTime":1645669003614
      }
    },
    "tokenType":"Bearer",
    "value":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDU2NzI2MDMsInVzZXJuYW1lIjoiOWUwM2Q5Y2JjZTRiNzAxNGU3NWJlNjQyNjZjM2E4NDEiLCJ0b2tlbiI6IjUwMDcyOTFjYjM0NzRmMDdiOTE3ZmFjMGZhY2JjNzgzIn0.egM67L5rhgkS9Ytrs4t49ry_NoSPz-WGzLiY3AaFBeg","expiration":"1645672603614"
  }
*/
export const login = (username: string, password: string): Promise<any> => {
  return axios.post('login', { username, password });
};
