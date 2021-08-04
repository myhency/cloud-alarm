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

const initialAlarm = {
  result: undefined,
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

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    alarms: [],
    alarmId: { alarmId: 0 },
    alarmDetail: initialAlarm,
    newAlarm: initialAlarm,
    updateAlarm: initialAlarm,
    readdAlarm: initialAlarm,
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
      console.log(alarm);
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
      payload: detailObj,
    }) {
      console.log(detailObj);
      return {
        ...state,
        alarmDetail: {
          ...state.alarmDetail,
          ...detailObj,
        },
      };
    },

    setNewAlarm(state, {
      payload: newObj,
    }) {
      return {
        ...state,
        newAlarm: {
          ...state.newAlarm,
          ...newObj,
        },
      };
    },

    setUpdateAlarm(state, {
      payload: updateObj,
    }) {
      return {
        ...state,
        updateAlarm: {
          ...state.updateAlarm,
          ...updateObj,
        },
      };
    },

    clearAlarmDetail(state) {
      return {
        ...state,
        alarmDetail: initialAlarm,
      };
    },

    clearNewAlarm(state) {
      return {
        ...state,
        newAlarm: initialAlarm,
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

    clearUpdateAlarm(state) {
      return {
        ...state,
        updateAlarm: initialAlarm,
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
  setNewAlarm,
  setUpdateAlarm,
  setCreateAlarmResult,
  setModifiedAlarmResult,
  setAlarmId,
  clearAlarmId,
  clearNewAlarm,
  clearUpdateAlarm,
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
        result,
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

    dispatch(setAlarmDetail({
      result,
      ...data,
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

export function createAlarm(newAlarm) {
  return async (dispatch) => {
    const { result, data } = await saveAlarmDocument(newAlarm);

    const {
      alarmId, itemName, itemCode, recommendPrice,
      losscutPrice, comment, theme,
      createdDate, modifiedDate, alarmStatus,
      alarmedAt, losscutAt,
    } = data;

    dispatch(setNewAlarm({
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

export function modifyAlarm(modifiedAlarm) {
  return async (dispatch) => {
    const { result, data } = await updateAlarmDocument(modifiedAlarm);

    if (result) {
      dispatch(setUpdateAlarm({
        result,
        ...data,
      }));
    } else {
      dispatch(setUpdateAlarm({
        result,
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
    }
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
