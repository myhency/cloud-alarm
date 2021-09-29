import { createSlice } from '@reduxjs/toolkit';
import {
  fetchSevenBreadList,
  fetchSevenBreadItemByItemCode,
  saveSevenBreadItemDocument,
  deleteSevenBreadItemDocument,
  getSevenBreadRealTimeList,
  createSevenBreadItemAddListener,
  updateSevenBreadItemAddListener,
  fetchSevenBreadStatisticsData,
} from './services/sevenbread';

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

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    sevenBreadList: [],
    sevenBreadItemId: { sevenBreadItemId: 0 },
    sevenBreadItemDocument: initialSevenBreadItemDocument,
    createdSevenBreadItem: initialCreatedSevenBreadItem,
    deletedSevenBreadItem: initialCreatedSevenBreadItem,
    sevenBreadRealTimeList: {},
    sevenBreadStatisticsData: [],
  },
  reducers: {
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

    setSevenBreadStatisticsData(state, {
      payload: {
        statisticsData,
      },
    }) {
      return {
        ...state,
        sevenBreadStatisticsData: statisticsData,
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

    clearDeletedSevenBreadItem(state) {
      return {
        ...state,
        deletedSevenBreadItem: initialCreatedSevenBreadItem,
      };
    },

  },
});

export const {
  setSevenBreadItemDocument,
  setSevenBreadList,
  setDeletedSevenBreadItemDocument,
  setSevenBreadRealTimeList,
  setSevenBreadItemId,
  setCreatedSevenBreadItem,
  clearSevenBreadItemId,
  clearSevenBreadItemDocument,
  clearCreatedSevenBreadItem,
  clearDeletedSevenBreadItem,
  setSevenBreadStatisticsData,
} = actions;

export default reducer;

export function loadSevenBreadList() {
  return async (dispatch) => {
    const { data } = await fetchSevenBreadList();
    const sevenBreadList = data;

    dispatch(setSevenBreadList({
      sevenBreadList,
    }));
  };
}

export function removeSevenBreadItemDocument(id, action) {
  return async (dispatch) => {
    const { result, data } = await deleteSevenBreadItemDocument(id, action);

    dispatch(setDeletedSevenBreadItemDocument({
      result,
      id: data.id,
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

export function loadSevenBreadItems() {
  return async (dispatch) => {
    const list = await getSevenBreadRealTimeList();

    dispatch(setSevenBreadRealTimeList({
      sevenBreadRealTimeList: list,
    }));
  };
}

export function loadSevenBreadItemByItemCode(_itemCode) {
  return async (dispatch) => {
    const { data } = await fetchSevenBreadItemByItemCode(_itemCode);

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

export function loadSevenBreadStatisticsData() {
  return async (dispatch) => {
    const { result, data } = await fetchSevenBreadStatisticsData();

    dispatch(setSevenBreadStatisticsData({
      result,
      statisticsData: data,
    }));
  };
}
