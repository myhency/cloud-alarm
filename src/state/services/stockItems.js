import axios from 'axios';
import Cookies from 'js-cookie';

// eslint-disable-next-line import/prefer-default-export
export async function fetchStockItemList() {
  return axios.get('/api/v1/platform/item/stockItem', {
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
