import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';

import thunk from 'redux-thunk';

import authReducer from './authSlice';
import alarmReducer from './alarmSlice';
import stockItemReducer from './stockItemSlice';
import analyzeVolumeReducer from './analyzeVolumeSlice';
import sevenBreadReducer from './sevenBreadSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  alarm: alarmReducer,
  stockItem: stockItemReducer,
  analyzeVolume: analyzeVolumeReducer,
  sevenBread: sevenBreadReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
