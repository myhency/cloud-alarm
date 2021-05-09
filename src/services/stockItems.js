import { stockItems } from '../../fixture/stockItems';

export async function fetchStockItemList() {
  // return axios.get('/api/v1/platform/alarm/stockItem')
  // .then((response) => {
  //     console.log(response);
  //     return {
  //       result: true,
  //       data: response.data
  //     }
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     throw new Error(error);
  //   });
  return new Promise((resolve, _) => setTimeout(() =>
    resolve({
      result: true,
      data: stockItems,
    }), 500));
}
