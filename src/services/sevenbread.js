/* eslint-disable import/prefer-default-export */
import { sevenBread } from '../../fixture/sevenbread';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ControlCameraSharp } from '@material-ui/icons';

// export async function fetchSevenBreadList() {
//   return new Promise((resolve, _) => setTimeout(() => resolve({
//     result: true,
//     data: sevenBread,
//   }), 500));
// }

export async function fetchSevenBreadList() {
  return axios.get('/api/v1/platform/sevenbread/item', {
    headers: {
      Authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
  })
    .then((response) => ({
      result: true,
      data: response.data.data,
    }))
    .catch((error) => {
      if (error.response) {
        console.log(error.response.status);
      }
      return {
        result: false,
        data: error,
      };
    });
}

export async function fetchSevenBreadItemByItemCode(itemCode) {
  return axios.get(`/api/v1/platform/sevenbread/item/detail?itemCode=${itemCode}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
  })
    .then((response) => ({
      result: true,
      data: response.data.data,
    }))
    .catch((error) => ({
      result: false,
      data: error,
    }));
}
