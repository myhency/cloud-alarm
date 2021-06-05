import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { fetchSignProgressStatus } from '../services/dashboard';
import {
  fetchContacts,
  fetchContactDetail,
} from '../services/contacts';
import {
  fetchDocumentList,
} from '../services/documents';
import {
  fetchAlarmList,
  fetchLosscutAlarmList,
  fetchAlarmDetail,
  saveAlarmDocument,
  updateAlarmDocument,
  fetchAlarmByItemCode,
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
};

function parseDocument(document) {
  const {
    id,
    name,
    receiver,
    lastUpdated,
  } = document;
  const totalCount = receiver.length;
  const completeCount = receiver.filter((rec) => rec.isSigned === true).length;

  // TODO. 사인상태표시로직 개발해야 함
  // receiver.map((v, i) => {
  //   if (v.name === userName && v.email === userEmail && !v.isSigned) {
  //     progressState = '서명해야 함'
  //   }
  // })

  return {
    id,
    name,
    receiver,
    totalCount,
    completeCount,
    lastUpdated,
    signState: '구현 예정',
  };
}

function parseDocuments(documents, userName, userEmail) {
  return documents.map((document) => parseDocument(document, userName, userEmail));
}

function parseAlarm(alarm) {
  const {
    alarmId,
    itemName,
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
    stockItems: [],
    alarmId: { alarmId: 0 },
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

    setDocuments(state, { payload: documents }) {
      const parsedDocuments = parseDocuments(
        documents,
        state.loggedInUserName,
        state.loggedInUserEmail,
      );

      return {
        ...state,
        documents: parsedDocuments,
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
        },
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
  setAlarms,
  setStockItems,
  setAlarmDocument,
  setAlarmDetail,
  setCreateAlarmResult,
  setModifiedAlarmResult,
  setAlarmId,
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

export function getLoginToken(dataToSubmit) {
  return async (dispatch) => {
    const { result, data } = await getJwtToken(dataToSubmit);
    const accessToken = data;

    console.log(data);

    if (result) {
      Cookies.set('accessToken', accessToken);
    }

    dispatch(setAccessToken(
      accessToken,
    ));
  };
}
