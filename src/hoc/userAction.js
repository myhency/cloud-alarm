import axios from 'axios';
import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, AUTH_USER } from './type';

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
