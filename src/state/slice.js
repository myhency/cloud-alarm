import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

import { fetchSignProgressStatus } from '../services/dashboard';
import {
  fetchContacts,
  fetchContactDetail,
} from '../services/contacts';
import {
  fetchDocumentList,
} from '../services/documents';
import {
  fetchVolumeDateList,
  fetchVolumeDataList,
} from '../services/analyze';
import {
  fetchAlarmList,
  fetchLosscutAlarmList,
  fetchAlarmedAlarmList,
  fetchAlarmDetail,
  fetchHistoryAlarmDetail,
  saveAlarmDocument,
  updateAlarmDocument,
  fetchAlarmByItemCode,
  deleteAlarmDoument,
} from '../services/alarms';
import {
  fetchStockItemList,
} from '../services/stockItems';
import {
  getJwtToken,
} from '../services/auth';

import locales from '../locales.json';

const DEFAULT_LOCALE = 'en';

const initialAlarmDetail = {
  alarmId: 0,
  itemName: '',
  itemCode: '',
  recommendPrice: 0,
  losscutPrice: 0,
  comment: '',
  theme: '',
  createdDate: '',
  modifiedDate: '',
  alarmStatus: '',
  alarmedAt: '',
  losscutAt: '',
};

const initialCreatedAlarm = {
  result: true,
  alarmId: 0,
  itemName: '',
  itemCode: '',
  recommendPrice: 0,
  losscutPrice: 0,
  comment: '',
  theme: '',
  createdDate: '',
  modifiedDate: '',
  alarmStatus: '',
  alarmedAt: '',
  losscutAt: '',
};

const initialAlarmDocument = {
  itemName: '',
  itemCode: '',
  recommendPrice: 0,
  losscutPrice: 0,
  comment: '',
  theme: '',
  alarmStatus: '',
};

// const initialVolumeDataList = {[
//   id: 0,
//   itemName: '',
//   itemCode: '',
//   closingPrice: 0,
//   fluctuationRate: 0,
//   volume: 0,
//   numberOfOutstandingShares: 0,
//   marketCap: 0,
//   marketType: '',
// ]};

function parseAlarm(alarm) {
  const {
    alarmId,
    itemName,
    itemCode,
    recommendPrice,
    losscutPrice,
    createdDate,
    alarmStatus,
    modifiedDate,
    theme,
    comment,
  } = alarm;

  return {
    alarmId,
    itemName,
    itemCode,
    recommendPrice,
    losscutPrice,
    createdDate,
    alarmStatus,
    modifiedDate,
    theme,
    comment,
  };
}

function parseAlarms(alarms) {
  return alarms.map((alarm) => parseAlarm(alarm));
}

function parseLosscutAlarms(losscutAlarms) {
  return losscutAlarms.map((losscutAlarm) => parseAlarm(losscutAlarm));
}

function parseAlarmedAlarms(alarmedAlarms) {
  return alarmedAlarms.map((alarmedAlarm) => parseAlarm(alarmedAlarm));
}

function parseStockItem(stockItem) {
  const {
    itemName,
    itemCode,
    theme,
  } = stockItem;

  return {
    itemName,
    itemCode,
    theme,
  };
}

function parseStockItems(stockItems) {
  return stockItems.map((stockItem) => parseStockItem(stockItem));
}

const { actions, reducer } = createSlice({

  // 이 부분이 store
  // TODO. 임시값이므로 실제 API연동하면 바꿀것
  contactId: 1,
  internalUserId: 1,

  // 이건 실제 상태임
  name: 'application',
  loggedInUserId: 1,
  loggedInUserName: 'receiver01',
  loggedInUserEmail: 'receiver01@test.com',
  initialState: {
    contactId: 1,
    internalUserId: 1,
    accessToken: null,
    signProgressStatus: {
      signWait: null,
      signProgress: null,
      confirmWait: null,
      confirmComplete: null,
    },
    mobileOpen: false,
    localeText: {},
    locale: '',
    contacts: [],
    createdAlarm: initialCreatedAlarm,
    modifiedAlarm: initialCreatedAlarm,
    alarmDetail: initialAlarmDetail,
    alarmDocument: initialAlarmDocument,
    documents: [],
    alarms: [],
    losscutAlarms: [],
    alarmedAlarms: [],
    stockItems: [],
    alarmId: { alarmId: 0 },
    volumeDateList: [],
    volumeDataList: [],
  },
  // 이 부분이 reducer
  reducers: {
    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },

    setSignProgress(state, { payload: signProgressStatus }) {
      return {
        ...state,
        signProgressStatus,
      };
    },

    setMobileOpen(state, { payload: mobileOpen }) {
      return {
        ...state,
        mobileOpen,
      };
    },

    setLocale(state, { payload: locale }) {
      const localeText = locales[locale];
      return {
        ...state,
        locale: localeText ? locale : DEFAULT_LOCALE,
        localeText: localeText || locales[DEFAULT_LOCALE],
      };
    },

    setContacts(state, { payload: contacts }) {
      return {
        ...state,
        contacts,
      };
    },

    setContactDetail(state, { payload: { name, phoneNumber, email } }) {
      return {
        ...state,
        contactDetail: {
          ...state.contactDetail,
          name,
          phoneNumber,
          email,
        },
      };
    },

    clearAlarmDetail(state) {
      return {
        ...state,
        alarmDetail: initialAlarmDetail,
      };
    },

    clearCreatedAlarm(state) {
      return {
        ...state,
        createdAlarm: initialCreatedAlarm,
      };
    },

    clearModifiedAlarm(state) {
      return {
        ...state,
        modifiedAlarm: initialCreatedAlarm,
      };
    },

    clearAlarmDocument(state) {
      return {
        ...state,
        alarmDocument: initialAlarmDocument,
      };
    },

    clearAlarmId(state) {
      return {
        ...state,
        alarmId: { alarmId: 0 },
      };
    },

    clearAccessToken(state) {
      return {
        ...state,
        accessToken: null,
      };
    },

    setLosscutAlarms(state, { payload: losscutAlarms }) {
      const parsedLosscutAlarms = parseLosscutAlarms(
        losscutAlarms,
      );

      // console.log(losscutAlarms);

      return {
        ...state,
        losscutAlarms: parsedLosscutAlarms,
      };
    },

    setAlarmedAlarms(state, { payload: alarmedAlarms }) {
      const parsedAlarmedAlarms = parseAlarmedAlarms(
        alarmedAlarms,
      );

      // console.log(losscutAlarms);

      return {
        ...state,
        alarmedAlarms: parsedAlarmedAlarms,
      };
    },

    setAlarms(state, { payload: alarms }) {
      const parsedAlarms = parseAlarms(
        alarms,
      );

      return {
        ...state,
        alarms: parsedAlarms,
      };
    },

    setAlarmDetail(state, {
      payload: {
        alarmId, itemName, itemCode, recommendPrice,
        losscutPrice, comment, theme,
        createdDate, modifiedDate, alarmStatus,
        alarmedAt, losscutAt,
      },
    }) {
      return {
        ...state,
        alarmDetail: {
          ...state.alarmDetail,
          alarmId,
          itemName,
          itemCode,
          recommendPrice,
          losscutPrice,
          comment,
          theme,
          createdDate,
          modifiedDate,
          alarmStatus,
          alarmedAt,
          losscutAt,
        },
      };
    },

    setCreateAlarmResult(state, {
      payload: {
        result, alarmId, itemName, itemCode, recommendPrice,
        losscutPrice, comment, theme,
        createdDate, modifiedDate, alarmStatus,
        alarmedAt, losscutAt,
      },
    }) {
      return {
        ...state,
        createdAlarm: {
          ...state.createdAlarm,
          result,
          alarmId,
          itemName,
          itemCode,
          recommendPrice,
          losscutPrice,
          comment,
          theme,
          createdDate,
          modifiedDate,
          alarmStatus,
          alarmedAt,
          losscutAt,
        },
      };
    },

    setModifiedAlarmResult(state, {
      payload: {
        result, alarmId, itemName, itemCode, recommendPrice,
        losscutPrice, comment, theme,
        createdDate, modifiedDate, alarmStatus,
        alarmedAt, losscutAt,
      },
    }) {
      return {
        ...state,
        modifiedAlarm: {
          ...state.createdAlarm,
          result,
          alarmId,
          itemName,
          itemCode,
          recommendPrice,
          losscutPrice,
          comment,
          theme,
          createdDate,
          modifiedDate,
          alarmStatus,
          alarmedAt,
          losscutAt,
        },
      };
    },

    setDeletedAlarmResult(state, {
      payload: {
        result, alarmId, itemName, itemCode, recommendPrice,
        losscutPrice, comment, theme,
        createdDate, modifiedDate, alarmStatus,
        alarmedAt, losscutAt,
      },
    }) {
      return {
        ...state,
        deletedAlarm: {
          ...state.createdAlarm,
          result,
          alarmId,
          itemName,
          itemCode,
          recommendPrice,
          losscutPrice,
          comment,
          theme,
          createdDate,
          modifiedDate,
          alarmStatus,
          alarmedAt,
          losscutAt,
        },
      };
    },

    setStockItems(state, { payload: stockItems }) {
      const parsedStockItems = parseStockItems(
        stockItems,
      );

      return {
        ...state,
        stockItems: parsedStockItems,
      };
    },

    setAlarmId(state, {
      payload: { alarmId },
    }) {
      return {
        ...state,
        alarmId: {
          ...state.alarmId,
          alarmId,
        },
      };
    },

    setAlarmDocument(state, {
      payload: {
        itemName,
        itemCode,
        recommendPrice,
        losscutPrice,
        comment,
        theme,
        alarmStatus,
      },
    }) {
      return {
        ...state,
        alarmDocument: {
          ...state.alarmDocument,
          itemName,
          itemCode,
          recommendPrice,
          losscutPrice,
          comment,
          theme,
          alarmStatus,
        },
      };
    },

    setVolumeDateList(state, {
      payload: {
        volumeDateList,
      },
    }) {
      return {
        ...state,
        volumeDateList,
      };
    },

    setVolumeDataList(state, {
      payload: {
        volumeDataList,
      },
    }) {
      return {
        ...state,
        volumeDataList,
      };
    },
  },
});

export const {
  setAccessToken,
  setSignProgress,
  setMobileOpen,
  setLocale,
  setContacts,
  setContactDetail,
  clearContactDetail,
  clearAlarmDetail,
  clearAlarmId,
  clearModifiedAlarm,
  clearCreatedAlarm,
  clearAlarmDocument,
  clearAccessToken,
  setDocuments,
  setLosscutAlarms,
  setAlarmedAlarms,
  setAlarms,
  setStockItems,
  setAlarmDocument,
  setAlarmDetail,
  setCreateAlarmResult,
  setModifiedAlarmResult,
  setDeletedAlarmResult,
  setAlarmId,
  setVolumeDateList,
  setVolumeDataList,
} = actions;

export default reducer;

export function loadSignProgressStatus(date) {
  return async (dispatch) => {
    const { result, data } = await fetchSignProgressStatus(date);

    if (!result) {
      const failSignProgressStatus = {
        signWait: 'error',
        signProgress: 'error',
        confirmWait: 'error',
        confirmComplete: 'error',
      };

      dispatch(setSignProgress(failSignProgressStatus));
      return;
    }

    dispatch(setSignProgress(data));
  };
}

export function loadContacts() {
  return async (dispatch, getState) => {
    const { contactId, internalUserId } = getState();

    const { result, data } = await fetchContacts(contactId, internalUserId);

    if (!result) {
      dispatch(setContacts('error'));
      return;
    }

    dispatch(setContacts(data.content));
    // TODO. Pagination 에 필요한 부분
    // dispatch(setPagination(data.page));
  };
}

export function loadContactDetail(id) {
  return async (dispatch) => {
    const { result, data } = await fetchContactDetail(id);

    if (!result) {
      dispatch(setContactDetail({
        name: 'error',
        phoneNumber: 'error',
        email: 'error',
      }));
      return;
    }

    const { name, phoneNumber, email } = data;

    dispatch(setContactDetail({ name, phoneNumber, email }));
  };
}

export function loadDocumentList() {
  return async (dispatch) => {
    const { result, data } = await fetchDocumentList();

    if (!result) {
      return;
    }
    dispatch(setDocuments(data));
  };
}

export function loadAlarmList() {
  return async (dispatch) => {
    const { result, data } = await fetchAlarmList();

    console.log(data, result);
    if (!result) {
      console.log(data);
      // return;
    }
    dispatch(setAlarms(data));
  };
}

export function loadLosscutAlarmList() {
  return async (dispatch) => {
    const { result, data } = await fetchLosscutAlarmList();

    console.log(data, result);
    if (!result) {
      console.log(data);
      // return;
    }
    dispatch(setLosscutAlarms(data));
  };
}

export function loadAlarmedAlarmList() {
  return async (dispatch) => {
    const { result, data } = await fetchAlarmedAlarmList();

    console.log(data, result);
    if (!result) {
      console.log(data);
      // return;
    }
    dispatch(setAlarmedAlarms(data));
  };
}

export function loadStockItemList() {
  return async (dispatch) => {
    const { result, data } = await fetchStockItemList();

    if (!result) {
      return;
    }
    dispatch(setStockItems(data));
  };
}

export function loadAlarmDocument() {
  return (dispach, getState) => {
    const { alarmDocument } = getState();
    console.log(alarmDocument);
  };
}

export function loadAlarmIdByItemCode(_itemCode) {
  return async (dispatch) => {
    const { result, data } = await fetchAlarmByItemCode(_itemCode);

    console.log(data);

    if (data) {
      dispatch(setAlarmId({
        alarmId: data.alarmId,
      }));
      return;
    }

    dispatch(setAlarmId({
      alarmId: undefined,
    }));
  };
}

export function loadAlarmDetail(_id) {
  return async (dispatch) => {
    const { result, data } = await fetchAlarmDetail(_id);

    console.log(data, result);

    if (!result) {
      dispatch(setAlarmDetail({
        itemName: 'error',
        itemCode: 'error',
        recommendPrice: 'error',
        losscutPrice: 'error',
        comment: 'error',
        theme: 'error',
        createdDate: 'error',
        modifiedDate: 'error',
        alarmStatus: 'error',
        alarmedAt: 'error',
        losscutAt: 'error',
      }));
      return;
    }

    const {
      alarmId, itemName, itemCode, recommendPrice,
      losscutPrice, comment, theme,
      createdDate, modifiedDate, alarmStatus,
      alarmedAt, losscutAt,
    } = data.data;

    dispatch(setAlarmDetail({
      alarmId,
      itemName,
      itemCode,
      recommendPrice,
      losscutPrice,
      comment,
      theme,
      createdDate,
      modifiedDate,
      alarmStatus,
      alarmedAt,
      losscutAt,
    }));
  };
}

export function loadHistoryAlarmDetail(_id) {
  return async (dispatch) => {
    const { result, data } = await fetchHistoryAlarmDetail(_id);

    console.log(data, result);

    if (!result) {
      dispatch(setAlarmDetail({
        itemName: 'error',
        itemCode: 'error',
        recommendPrice: 'error',
        losscutPrice: 'error',
        comment: 'error',
        theme: 'error',
        createdDate: 'error',
        modifiedDate: 'error',
        alarmStatus: 'error',
        alarmedAt: 'error',
        losscutAt: 'error',
      }));
      return;
    }

    const {
      alarmId, itemName, itemCode, recommendPrice,
      losscutPrice, comment, theme,
      createdDate, modifiedDate, alarmStatus,
      alarmedAt, losscutAt,
    } = data.data;

    dispatch(setAlarmDetail({
      alarmId,
      itemName,
      itemCode,
      recommendPrice,
      losscutPrice,
      comment,
      theme,
      createdDate,
      modifiedDate,
      alarmStatus,
      alarmedAt,
      losscutAt,
    }));
  };
}

export function createAlarmDocument(newAlarmDocument) {
  return async (dispatch) => {
    const { result, data } = await saveAlarmDocument(newAlarmDocument);

    console.log(data);
    const {
      alarmId, itemName, itemCode, recommendPrice,
      losscutPrice, comment, theme,
      createdDate, modifiedDate, alarmStatus,
      alarmedAt, losscutAt,
    } = data;

    dispatch(setCreateAlarmResult({
      result,
      alarmId,
      itemName,
      itemCode,
      recommendPrice,
      losscutPrice,
      comment,
      theme,
      createdDate,
      modifiedDate,
      alarmStatus,
      alarmedAt,
      losscutAt,
    }));
  };
}

export function modifyAlarmDocument(modifiedAlarmDocument) {
  return async (dispatch) => {
    const { result, data } = await updateAlarmDocument(modifiedAlarmDocument);

    console.log(result, data);

    const {
      alarmId, itemName, itemCode, recommendPrice,
      losscutPrice, comment, theme,
      createdDate, modifiedDate, alarmStatus,
      alarmedAt, losscutAt,
    } = data;

    dispatch(setModifiedAlarmResult({
      result,
      alarmId,
      itemName,
      itemCode,
      recommendPrice,
      losscutPrice,
      comment,
      theme,
      createdDate,
      modifiedDate,
      alarmStatus,
      alarmedAt,
      losscutAt,
    }));
  };
}

export function removeAlarmDocument(id) {
  return async (dispatch) => {
    const { result, data } = await deleteAlarmDoument(id);

    console.log(result, data);

    const {
      alarmId, itemName, itemCode, recommendPrice,
      losscutPrice, comment, theme,
      createdDate, modifiedDate, alarmStatus,
      alarmedAt, losscutAt,
    } = data;

    dispatch(setDeletedAlarmResult({
      result,
      alarmId,
      itemName,
      itemCode,
      recommendPrice,
      losscutPrice,
      comment,
      theme,
      createdDate,
      modifiedDate,
      alarmStatus,
      alarmedAt,
      losscutAt,
    }));
  };
}

export function getLoginToken(dataToSubmit) {
  return async (dispatch) => {
    const { result, data } = await getJwtToken(dataToSubmit);
    const accessToken = data;

    console.log(data);

    if (result) {
      Cookies.set('accessToken', accessToken);
      const key = 'breadstockcloud';
      const res = jwt.verify(accessToken, key);
      Cookies.set('role', res.roles[0]);
    }

    dispatch(setAccessToken(
      accessToken,
    ));
  };
}

export function loadVolumeDateList() {
  return async (dispatch) => {
    const { result, data } = await fetchVolumeDateList();
    const volumeDateList = data;

    console.log(data);

    dispatch(setVolumeDateList({
      volumeDateList,
    }));
  };
}

export function loadVolumeDataList(date) {
  return async (dispatch) => {
    const { result, data } = await fetchVolumeDataList(date);
    const volumeDataList = data;

    console.log(data);

    dispatch(setVolumeDataList({
      volumeDataList,
    }));
  };
}
