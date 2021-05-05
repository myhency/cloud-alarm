// import { alarms } from '../../fixture/alarms';
import axios from 'axios';

export async function fetchAlarmList() {
  return axios.get('/api/v1/platform/alarm/stockItem')
  .then((response) => {
      console.log(response);
      return {
        result: true,
        data: response.data
      }
    })
    .catch(error => {
      console.log(error);
      throw new Error(error);
    });
  
  // return new Promise((resolve, _) => setTimeout(() =>
  //   resolve({
  //     result: true,
  //     data: alarms,
  //   }), 500));
}

export async function fetchAlarmDetail(id) {
  return null;
}