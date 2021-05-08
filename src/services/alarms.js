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
}

export async function fetchAlarmDetail(id) {
  return axios.get(`/api/v1/platform/alarm/stockItem/${id}`)
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
}