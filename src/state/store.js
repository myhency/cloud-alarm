import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';

import thunk from 'redux-thunk';

import reducer from './slice';
import authReducer from './authSlice';
import alarmReducer from './alarmSlice';
import stockItemReducer from './stockItemSlice';
import analyzeVolumeReducer from './analyzeVolumeSlice';

const rootReducer = combineReducers({
  reducer,
  auth: authReducer,
  alarm: alarmReducer,
  stockItem: stockItemReducer,
  analyzeVolume: analyzeVolumeReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
