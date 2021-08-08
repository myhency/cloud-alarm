import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import {
  getJwtToken,
} from './services/auth';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    accessToken: null,
  },

  reducers: {
    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },

    clearAccessToken(state) {
      return {
        ...state,
        accessToken: null,
      };
    },
  },
});

export const {
  setAccessToken,
  clearAccessToken,
} = actions;

export default reducer;

export function getLoginToken(dataToSubmit) {
  return async (dispatch) => {
    const { result, data } = await getJwtToken(dataToSubmit);
    const accessToken = data;

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
