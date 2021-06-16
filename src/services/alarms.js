import axios from 'axios';
import Cookies from 'js-cookie';

export async function fetchAlarmList() {
  return axios.get('/api/v1/platform/alarm/stockItem', {
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

export async function fetchLosscutAlarmList() {
  return axios.get('/api/v1/platform/alarm/history?status=LOSSCUT', {
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

export async function fetchAlarmDetail(id) {
  return axios.get(`/api/v1/platform/alarm/stockItem/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
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

export async function fetchLosscutAlarmDetail(id) {
  return axios.get(`/api/v1/platform/alarm/history/${id}`, {
    headers: {
      Authorization: `Bearer ${Cookies.get('accessToken')}`,
    },
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

export async function fetchAlarmByItemCode(itemCode) {
  return axios.get(`/api/v1/platform/alarm/stockItem/filter?itemCode=${itemCode}`, {
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

export async function saveAlarmDocument(newAlarmDocument) {
  const {
    itemName,
    itemCode,
    recommendPrice,
    losscutPrice,
    comment,
    theme,
  } = newAlarmDocument;
  return axios.post('/api/v1/platform/alarm/stockItem', {
    itemName, itemCode, recommendPrice, losscutPrice, comment, theme,
  }, {
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

export async function updateAlarmDocument(updatedAlarmDocument) {
  const {
    alarmId,
    itemName,
    itemCode,
    recommendPrice,
    losscutPrice,
    comment,
    theme,
    alarmStatus,
  } = updatedAlarmDocument;
  return axios.put(`/api/v1/platform/alarm/stockItem/${alarmId}`, {
    itemName, itemCode, recommendPrice, losscutPrice, comment, theme, alarmStatus,
  }, {
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
