import { createSlice } from '@reduxjs/toolkit';
import {
  fetchStockItemList,
} from './services/stockItems';

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
  name: 'application',
  initialState: {
    stockItems: [],
  },
  reducers: {
    setStockItems(state, { payload: stockItems }) {
      const parsedStockItems = parseStockItems(
        stockItems,
      );

      return {
        ...state,
        stockItems: parsedStockItems,
      };
    },
  },
});

export const {
  setStockItems,
} = actions;

export default reducer;

export function loadStockItemList() {
  return async (dispatch) => {
    const { result, data } = await fetchStockItemList();

    if (!result) {
      return;
    }
    dispatch(setStockItems(data));
  };
}
