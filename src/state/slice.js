import { createSlice } from '@reduxjs/toolkit';

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
  fetchAlarmDetail,
} from '../services/alarms';

import {
  fetchStockItemList,
} from '../services/stockItems';

import locales from '../locales.json';

const DEFAULT_LOCALE = 'en';

const initialAlarmDetail = {
  itemName: '',
  itemCode: '',
  recommendPrice: 0,
  losscutPrice: 0,
  comment: '',
  theme: '',
  createdAt: '',
  lastUpdatedAt: '',
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
  theme: ''
}

function parseDocument(document, userName, userEmail) {
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
    id,
    itemName,
    recommendPrice,
    losscutPrice,
    createdAt,
    alarmStatus,
    lastUpdatedAt,
    theme,
    comment,
  } = alarm;

  return {
    id,
    itemName,
    recommendPrice,
    losscutPrice,
    createdAt,
    alarmStatus,
    lastUpdatedAt,
    theme,
    comment,
  };
}

function parseAlarms(alarms) {
  return alarms.map((alarm) => parseAlarm(alarm));
}

function parseStockItem(stockItem) {
  const {
    itemName,
    itemCode,
  } = stockItem;

  return {
    itemName,
    itemCode,
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
    alarmDetail: initialAlarmDetail,
    alarmDocument: initialAlarmDocument,
    documents: [],
    alarms: [],
    stockItems: [],
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

    clearContactDetail(state) {
      return {
        ...state,
        contactDetail: initialContactDetail,
      };
    },

    clearAlarmDetail(state) {
      return {
        ...state,
        alarmDetail: initialAlarmDetail,
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

    setAlarms(state, { payload: alarms }) {
      const parsedAlarms = parseAlarms(
        alarms
      );

      return {
        ...state,
        alarms: parsedAlarms,
      };
    },

    setAlarmDetail(state, { payload: {
      itemName, itemCode, recommendPrice,
      losscutPrice, comment, theme,
      createdAt, lastUpdatedAt, alarmStatus,
      alarmedAt, losscutAt,
    } }) {
      return {
        ...state,
        alarmDetail: {
          ...state.alarmDetail,
          itemName, itemCode, recommendPrice,
          losscutPrice, comment, theme,
          createdAt, lastUpdatedAt, alarmStatus,
          alarmedAt, losscutAt,
        },
      };
    },

    setStockItems(state, { payload: stockItems }) {
      const parsedStockItems = parseStockItems(
        stockItems
      );

      return {
        ...state,
        stockItems: parsedStockItems,
      };
    },

    setAlarmDocument(state, {
      payload: {
        itemName,
        itemCode,
        recommendPrice,
        losscutPrice,
        comment,
        theme
      } }) {
      
      console.log(itemName)
      
      return {
        ...state,
        alarmDocument: {
          ...state.alarmDocument,
          itemName,
          itemCode,
          recommendPrice,
          losscutPrice,
          comment,
          theme
        }
      }
    },
  }
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
  setDocuments,
  setAlarms,
  setStockItems,
  setAlarmDocument,
  setAlarmDetail,
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

    if (!result) {
      return;
    }
    dispatch(setAlarms(data));
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
    console.log(alarmDocument)
  }
}

export function loadAlarmDetail(id) {
  return async (dispatch) => {
    const { result, data } = await fetchAlarmDetail(id);

    if (!result) {
      dispatch(setAlarmDetail({
        itemName: 'error',
        itemCode: 'error',
        recommendPrice: 'error',
        losscutPrice: 'error',
        comment: 'error',
        theme: 'error',
        createdAt: 'error',
        lastUpdatedAt: 'error',
        alarmStatus: 'error',
        alarmedAt: 'error',
        losscutAt: 'error',
      }));
      return;
    }

    const { itemName, itemCode, recommendPrice,
      losscutPrice, comment, theme,
      createdAt, lastUpdatedAt, alarmStatus,
    alarmedAt, losscutAt, } = data;

    dispatch(setAlarmDetail({
      itemName,
      itemCode,
      recommendPrice,
      losscutPrice,
      comment,
      theme,
      createdAt,
      lastUpdatedAt,
      alarmStatus,
      alarmedAt,
      losscutAt,
    }));
  };
}

