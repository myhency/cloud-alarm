import axios from 'axios';
import Cookies from 'js-cookie';

export async function fetchAlarmList(status) {
  // eslint-disable-next-line no-nested-ternary
  const URL = status === 'active' ? '/api/v1/platform/alarm/stockItem'
    : status === 'alarmed' ? '/api/v1/platform/alarm/stockItem/status?status=ALARMED'
      : '/api/v1/platform/alarm/history?status=LOSSCUT';
  return axios.get(URL, {
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
      data: response.data.data,
    }))
    .catch((error) => ({
      result: false,
      data: error,
    }));
}

export async function fetchHistoryAlarmDetail(id) {
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

export async function saveAlarmDocument(newAlarm) {
  const {
    itemName,
    itemCode,
    recommendPrice,
    losscutPrice,
    comment,
    theme,
  } = newAlarm;
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

export async function deleteAlarmDoument(alarmId) {
  return axios.delete(`/api/v1/platform/alarm/stockItem/${alarmId}`, {
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
