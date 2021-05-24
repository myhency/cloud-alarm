import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: '/',
  headers: {
    Authorization: `Bearer ${Cookies.get('accessToken')}`,
  },
});

export async function fetchAlarmList() {
  return instance.get('/api/v1/platform/alarm/stockItem')
    .then((response) => ({
      result: true,
      data: response.data,
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

export async function fetchAlarmDetail(id) {
  return instance.get(`/api/v1/platform/alarm/stockItem/${id}`)
    .then((response) => ({
      result: true,
      data: response.data,
    }))
    .catch((error) => ({
      result: false,
      data: error,
    }));
}

export async function fetchAlarmByItemCode(itemCode) {
  return instance.get(`/api/v1/platform/alarm/stockItem/filter?itemCode=${itemCode}`)
    .then((response) => ({
      result: true,
      data: response.data.data,
    }))
    .catch((error) => ({
      result: false,
      data: error,
    }));
}

export async function saveAlarmDocument(newAlarmDocument) {
  const {
    itemName,
    itemCode,
    recommendPrice,
    losscutPrice,
    comment,
    theme,
  } = newAlarmDocument;
  return instance.post('/api/v1/platform/alarm/stockItem', {
    itemName, itemCode, recommendPrice, losscutPrice, comment, theme,
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

export async function updateAlarmDocument(updatedAlarmDocument) {
  const {
    id,
    itemName,
    itemCode,
    recommendPrice,
    losscutPrice,
    comment,
    theme,
  } = updatedAlarmDocument;
  return instance.put(`/api/v1/platform/alarm/stockItem/${id}`, {
    id, itemName, itemCode, recommendPrice, losscutPrice, comment, theme,
  })
    .then((response) => ({
      result: true,
      data: response.data,
    }))
    .catch((error) => ({
      result: false,
      data: error,
    }));
}
