import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const AUTH_USER = 'AUTH_USER';

export default async function loginUser(dataToSubmit) {
  return axios.post('/api/v1/platform/auth/login', {
    userName: 'cloud',
    password: dataToSubmit.password,
  })
    .then((response) => ({
      result: true,
      type: LOGIN_USER,
      data: response.data,
    }))
    .catch((error) => ({
      result: false,
      type: LOGOUT_USER,
      data: error,
    }));
}
