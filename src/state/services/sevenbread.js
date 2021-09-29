/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import Cookies from 'js-cookie';
import firebase from '../../Firebase';

const db = firebase.database();

export async function fetchSevenBreadList() {
  return axios.get('/api/v1/platform/sevenbread/item', {
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

export function fetchSevenBreadStatisticsData() {
  return axios.get('/api/v1/platform/sevenbread/statistics/history/', {
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

export async function fetchSevenBreadItemByItemCode(itemCode) {
  return axios.get(`/api/v1/platform/sevenbread/item/detail?itemCode=${itemCode}`, {
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

export async function saveSevenBreadItemDocument(newSevenBreadItemDocument) {
  const {
    itemName,
    itemCode,
    capturedDate,
    majorHandler,
    theme,
  } = newSevenBreadItemDocument;

  return axios.post('/api/v1/platform/sevenbread/item', {
    itemName, itemCode, capturedDate, majorHandler, theme,
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

export async function deleteSevenBreadItemDocument(id, action) {
  return axios.delete(`/api/v1/platform/sevenbread/item/${id}/${action}`, {
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

export async function getSevenBreadRealTimeList() {
  const d = new Date();
  const month = String(d.getMonth() + 1).length === 1 ? `0${String(d.getMonth() + 1)}`
    : String(d.getMonth() + 1);
  const day = String(d.getDate()).length === 1 ? `0${String(d.getDate())}`
    : String(d.getDate());
  const sevenBreadBase = db.ref(`/sevenbread/alarm/${d.getFullYear()}${month}${day}`);
  return sevenBreadBase.get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return {};
    })
    .catch((error) => {
      console.log(error);
      return {};
    });
}

export function createSevenBreadItemAddListener(callback) {
  const d = new Date();
  const month = String(d.getMonth() + 1).length === 1 ? `0${String(d.getMonth() + 1)}`
    : String(d.getMonth() + 1);
  const day = String(d.getDate()).length === 1 ? `0${String(d.getDate())}`
    : String(d.getDate());
  const sevenBreadBase = db.ref(`/sevenbread/alarm/${d.getFullYear()}${month}${day}`);
  return sevenBreadBase.on('child_added', () => {
    sevenBreadBase.once('value')
      .then((data) => {
        callback(data.val());
      })
      .catch((error) => {
        console.log(error);
        return {};
      });
  });
}

export function updateSevenBreadItemAddListener(callback) {
  const d = new Date();
  const month = String(d.getMonth() + 1).length === 1 ? `0${String(d.getMonth() + 1)}`
    : String(d.getMonth() + 1);
  const day = String(d.getDate()).length === 1 ? `0${String(d.getDate())}`
    : String(d.getDate());
  const sevenBreadBase = db.ref(`/sevenbread/alarm/${d.getFullYear()}${month}${day}`);
  return sevenBreadBase.on('child_changed', () => {
    sevenBreadBase.once('value')
      .then((data) => {
        callback(data.val());
      })
      .catch((error) => {
        console.log(error);
        return {};
      });
  });
}
