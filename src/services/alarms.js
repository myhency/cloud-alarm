// import { alarms } from '../../fixture/alarms';
import axios from 'axios';
import { ids } from 'webpack';

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

export async function saveAlarmDocument(newAlarmDocument) {
  console.log(newAlarmDocument);
  const {
    itemName,
    itemCode,
    recommendPrice,
    losscutPrice,
    comment,
    theme,
  } = newAlarmDocument;
  return axios.post("/api/v1/platform/alarm/stockItem", {
    itemName, itemCode, recommendPrice, losscutPrice, comment, theme
  })
    .then((response) => {
      console.log(response);
      return {
        result: true,
        data: response.data
      }
    })
    .catch(error => {
      console.log(error);
      return {
        result: false,
        data: error
      }
    });
}

export async function updateAlarmDocument(updatedAlarmDocument) {
  console.log(updatedAlarmDocument);
  const {
    id,
    itemName,
    itemCode,
    recommendPrice,
    losscutPrice,
    comment,
    theme,
  } = updatedAlarmDocument;
  return axios.post('/api/v1/platform/alarm/stockItem/'+id, {
    id, itemName, itemCode, recommendPrice, losscutPrice, comment, theme
  })
    .then((response) => {
      console.log(response);
      return {
        result: true,
        data: response.data
      }
    })
    .catch(error => {
      console.log(error);
      return {
        result: false,
        data: error
      }
    });
}
