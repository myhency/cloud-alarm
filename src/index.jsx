import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './state/store';

import './assets/css/default.css';

import App from './App';

import { setLocale } from './state/slice';

const { location } = window;

const params = new Map([...new URLSearchParams(location.search)]);

const locale = params.get('locale') || (navigator.language || 'ko').slice(0, 2);

store.dispatch(setLocale(locale));

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app'),
);
