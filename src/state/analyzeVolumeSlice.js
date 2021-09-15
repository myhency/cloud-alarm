import { createSlice } from '@reduxjs/toolkit';
import {
  fetchVolumeDateList,
  fetchVolumeDataList,
  fetchVolumeDataListBy,
} from './services/analyze';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    volumeDateList: [],
    volumeDataList: [],
    filteredVolumeDataList: [],
  },
  reducers: {
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

    setFilteredVolumeDataList(state, {
      payload: {
        filteredVolumeDataList,
      },
    }) {
      return {
        ...state,
        filteredVolumeDataList,
      };
    },
  },
});

export const {
  setVolumeDateList,
  setVolumeDataList,
  setFilteredVolumeDataList,
} = actions;

export default reducer;

export function loadVolumeDateList() {
  return async (dispatch) => {
    const { data } = await fetchVolumeDateList();
    const volumeDateList = data;

    dispatch(setVolumeDateList({
      volumeDateList,
    }));
  };
}

export function loadVolumeDataList(date) {
  return async (dispatch) => {
    const { data } = await fetchVolumeDataList(date);
    const volumeDataList = data;

    dispatch(setVolumeDataList({
      volumeDataList,
    }));
  };
}

export function loadVolumeDataListByFilter(by, filter) {
  return async (dispatch) => {
    const { data } = await fetchVolumeDataListBy(by, filter);
    const filteredVolumeDataList = data;

    dispatch(setFilteredVolumeDataList({
      filteredVolumeDataList,
    }));
  };
}
