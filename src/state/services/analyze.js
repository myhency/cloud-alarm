import axios from 'axios';
import Cookies from 'js-cookie';

export async function fetchVolumeDateList() {
  return axios.get('/api/v1/platform/analyze/volume/datelist', {
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

export async function fetchVolumeDataList(date) {
  return axios.get(`/api/v1/platform/analyze/volume?date=${date}`, {
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
