import { createSlice } from '@reduxjs/toolkit';
import {
  fetchVolumeDateList,
  fetchVolumeDataList,
} from './services/analyze';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    volumeDateList: [],
    volumeDataList: [],
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
  },
});

export const {
  setVolumeDateList,
  setVolumeDataList,
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
