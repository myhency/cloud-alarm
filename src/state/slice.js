import { createSlice } from '@reduxjs/toolkit';

import { fetchSignProgressStatus } from './services/dashboard';
import {
  fetchContacts,
  fetchContactDetail,
} from './services/contacts';
import {
  fetchDocumentList,
} from './services/documents';
import {
  fetchVolumeDateList,
  fetchVolumeDataList,
} from './services/analyze';
import {
  fetchAlarmList,
  fetchLosscutAlarmList,
  fetchAlarmDetail,
  fetchHistoryAlarmDetail,
  saveAlarmDocument,
  updateAlarmDocument,
  fetchAlarmByItemCode,
  deleteAlarmDoument,
} from './services/alarms';
import {
  fetchStockItemList,
} from './services/stockItems';
// import {
//   getJwtToken,
// } from '../services/auth';
import {
  fetchSevenBreadList,
  fetchSevenBreadItemByItemCode,
  saveSevenBreadItemDocument,
  deleteSevenBreadItemDocument,
  getSevenBreadRealTimeList,
  createSevenBreadItemAddListener,
  updateSevenBreadItemAddListener,
} from './services/sevenbread';

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

const initialSevenBreadItemDocument = {
  itemName: '',
  itemCode: '',
  majorHandler: '',
  theme: '',
  capturedDate: '',
};

const initialCreatedSevenBreadItem = {
  result: true,
  id: 0,
};

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
    // accessToken: null,
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
    sevenBreadList: [],
    sevenBreadItemId: { sevenBreadItemId: 0 },
    sevenBreadItemDocument: initialSevenBreadItemDocument,
    createdSevenBreadItem: initialCreatedSevenBreadItem,
    deletedSevenBreadItem: initialCreatedSevenBreadItem,
    sevenBreadRealTimeList: {},
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

    clearSevenBreadItemId(state) {
      return {
        ...state,
        sevenBreadItemId: { sevenBreadItemId: 0 },
      };
    },

    clearSevenBreadItemDocument(state) {
      return {
        ...state,
        sevenBreadItemDocument: initialSevenBreadItemDocument,
      };
    },

    clearCreatedSevenBreadItem(state) {
      return {
        ...state,
        createdSevenBreadItem: initialCreatedSevenBreadItem,
      };
    },

    // clearAccessToken(state) {
    //   return {
    //     ...state,
    //     accessToken: null,
    //   };
    // },

    clearDeletedSevenBreadItem(state) {
      return {
        ...state,
        deletedSevenBreadItem: initialCreatedSevenBreadItem,
      };
    },

    setLosscutAlarms(state, { payload: losscutAlarms }) {
      const parsedLosscutAlarms = parseLosscutAlarms(
        losscutAlarms,
      );

      return {
        ...state,
        losscutAlarms: parsedLosscutAlarms,
      };
    },

    setAlarmedAlarms(state, { payload: alarmedAlarms }) {
      const parsedAlarmedAlarms = parseAlarmedAlarms(
        alarmedAlarms,
      );

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

    setSevenBreadItemId(state, {
      payload: { sevenBreadItemId },
    }) {
      return {
        ...state,
        sevenBreadItemId: {
          ...state.sevenBreadItemId,
          sevenBreadItemId,
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

    setSevenBreadItemDocument(state, {
      payload: {
        itemName,
        itemCode,
        majorHandler,
        theme,
        capturedDate,
      },
    }) {
      return {
        ...state,
        sevenBreadItemDocument: {
          ...state.sevenBreadItemDocument,
          itemName,
          itemCode,
          majorHandler,
          theme,
          capturedDate,
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

    setSevenBreadList(state, {
      payload: {
        sevenBreadList,
      },
    }) {
      return {
        ...state,
        sevenBreadList,
      };
    },

    setCreatedSevenBreadItem(state, {
      payload: {
        result,
        id,
      },
    }) {
      return {
        ...state,
        createdSevenBreadItem: {
          result,
          id,
        },
      };
    },

    setDeletedSevenBreadItemDocument(state, {
      payload: {
        result,
        id,
      },
    }) {
      return {
        ...state,
        deletedSevenBreadItem: {
          result,
          id,
        },
      };
    },

    setSevenBreadRealTimeList(state, {
      payload: {
        sevenBreadRealTimeList,
      },
    }) {
      return {
        ...state,
        sevenBreadRealTimeList,
      };
    },
  },
});

export const {
  // setAccessToken,
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
  // clearAccessToken,
  clearSevenBreadItemId,
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
  setSevenBreadList,
  setSevenBreadItemId,
  setSevenBreadItemDocument,
  setCreatedSevenBreadItem,
  clearCreatedSevenBreadItem,
  clearSevenBreadItemDocument,
  setDeletedSevenBreadItemDocument,
  clearDeletedSevenBreadItem,
  setSevenBreadRealTimeList,
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
      console.log(data);
      // return;
    }
    dispatch(setAlarms(data));
  };
}

export function loadLosscutAlarmList() {
  return async (dispatch) => {
    const { result, data } = await fetchLosscutAlarmList();

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
  };
}

export function loadAlarmIdByItemCode(_itemCode) {
  return async (dispatch) => {
    const { result, data } = await fetchAlarmByItemCode(_itemCode);

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

export function removeAlarmDocument(id) {
  return async (dispatch) => {
    const { result, data } = await deleteAlarmDoument(id);

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

export function loadVolumeDateList() {
  return async (dispatch) => {
    const { result, data } = await fetchVolumeDateList();
    const volumeDateList = data;

    dispatch(setVolumeDateList({
      volumeDateList,
    }));
  };
}

export function loadVolumeDataList(date) {
  return async (dispatch) => {
    const { result, data } = await fetchVolumeDataList(date);
    const volumeDataList = data;

    dispatch(setVolumeDataList({
      volumeDataList,
    }));
  };
}

export function loadSevenBreadList() {
  return async (dispatch) => {
    const { result, data } = await fetchSevenBreadList();
    const sevenBreadList = data;

    dispatch(setSevenBreadList({
      sevenBreadList,
    }));
  };
}

export function loadSevenBreadItemByItemCode(_itemCode) {
  return async (dispatch) => {
    const { result, data } = await fetchSevenBreadItemByItemCode(_itemCode);

    if (data) {
      dispatch(setSevenBreadItemId({
        sevenBreadItemId: data.id,
      }));
      return;
    }

    dispatch(setSevenBreadItemId({
      sevenBreadItemId: undefined,
    }));
  };
}

export function createSevenBreadItemDocument(newSevenBreadItemDocument) {
  return async (dispatch) => {
    const { result, data } = await saveSevenBreadItemDocument(newSevenBreadItemDocument);

    dispatch(setCreatedSevenBreadItem({
      result,
      id: data.id,
    }));
  };
}

export function removeSevenBreadItemDocument(id) {
  return async (dispatch) => {
    const { result, data } = await deleteSevenBreadItemDocument(id);

    dispatch(setDeletedSevenBreadItemDocument({
      result,
      id: data.id,
    }));
  };
}

export function loadSevenBreadItems() {
  return async (dispatch) => {
    const list = await getSevenBreadRealTimeList();

    dispatch(setSevenBreadRealTimeList({
      sevenBreadRealTimeList: list,
    }));
  };
}

export function onSevenBreadItemAdd() {
  return (dispatch) => {
    createSevenBreadItemAddListener((v) => {
      dispatch(setSevenBreadRealTimeList({
        sevenBreadRealTimeList: v,
      }));
    });
  };
}

export function onSevenBreadItemUpdate() {
  return (dispatch) => {
    updateSevenBreadItemAddListener((v) => {
      dispatch(setSevenBreadRealTimeList({
        sevenBreadRealTimeList: v,
      }));
    });
  };
}
