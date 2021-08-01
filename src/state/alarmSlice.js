import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAlarmList,
  fetchLosscutAlarmList,
  // fetchAlarmedAlarmList,
  fetchAlarmDetail,
  fetchHistoryAlarmDetail,
  saveAlarmDocument,
  updateAlarmDocument,
  fetchAlarmByItemCode,
  deleteAlarmDoument,
} from './services/alarms';

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

const initialAlarm = {
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

const initialNewAlarm = {
  itemName: '',
  itemCode: '',
  recommendPrice: 0,
  losscutPrice: 0,
  comment: '',
  theme: '',
  alarmStatus: '',
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

// function parseAlarmedAlarms(alarmedAlarms) {
//   return alarmedAlarms.map((alarmedAlarm) => parseAlarm(alarmedAlarm));
// }

function parseAlarms(alarms) {
  return alarms.map((alarm) => parseAlarm(alarm));
}

function parseLosscutAlarms(losscutAlarms) {
  return losscutAlarms.map((losscutAlarm) => parseAlarm(losscutAlarm));
}

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    alarms: [],
    alarm: initialAlarm,
    alarmDetail: initialAlarmDetail,
    alarmId: { alarmId: 0 },
    newAlarm: initialNewAlarm,
    createdAlarm: initialCreatedAlarm,
  },

  reducers: {
    clearAlarmId(state) {
      return {
        ...state,
        alarmId: { alarmId: 0 },
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

    setAlarm(state, { payload: alarm }) {
      const parsedAlarm = parseAlarm(
        alarm,
      );

      console.log('alarm:', alarm);

      return {
        ...state,
        alarm: parsedAlarm,
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

    setNewAlarm(state, {
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
        newAlarm: {
          ...state.newAlarm,
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

    clearAlarmDetail(state) {
      return {
        ...state,
        alarmDetail: initialAlarmDetail,
      };
    },

    clearNewAlarm(state) {
      return {
        ...state,
        newAlarm: initialNewAlarm,
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

    clearCreatedAlarm(state) {
      return {
        ...state,
        createdAlarm: initialCreatedAlarm,
      };
    },

    // setAlarmedAlarms(state, { payload: alarmedAlarms }) {
    //   const parsedAlarmedAlarms = parseAlarmedAlarms(
    //     alarmedAlarms,
    //   );

    //   return {
    //     ...state,
    //     alarmedAlarms: parsedAlarmedAlarms,
    //   };
    // },

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
  },
});

export const {
  setAlarms,
  setAlarm,
  setLosscutAlarms,
  setAlarmDetail,
  clearAlarmDetail,
  setDeletedAlarmResult,
  clearCreatedAlarm,
  setNewAlarm,
  setCreateAlarmResult,
  setModifiedAlarmResult,
  setAlarmId,
  clearAlarmId,
  clearNewAlarm,
} = actions;

export default reducer;

export function loadAlarmList(status) {
  return async (dispatch) => {
    const { result, data } = await fetchAlarmList(status);

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

// export function loadAlarmedAlarmList() {
//   return async (dispatch) => {
//     const { result, data } = await fetchAlarmedAlarmList();

//     if (!result) {
//       console.log(data);
//       // return;
//     }
//     dispatch(setAlarmedAlarms(data));
//   };
// }

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

export function createAlarmDocument(newAlarmDocument) {
  return async (dispatch) => {
    const { result, data } = await saveAlarmDocument(newAlarmDocument);

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
