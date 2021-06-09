import axios from 'axios';
import Cookies from 'js-cookie';
import { stockItems } from '../../fixture/stockItems';

// eslint-disable-next-line import/prefer-default-export
export async function fetchStockItemList() {
  // return new Promise((resolve, _) => setTimeout(() => resolve({
  //   result: true,
  //   data: stockItems,
  // }), 1));
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
