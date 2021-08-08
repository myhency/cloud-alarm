import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './state/store';

import './assets/css/default.css';

import App from './App';

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app'),
);
