/* eslint-disable no-underscore-dangle */
import React from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import { name as appName } from './app.json';
import App from './App';

import reducer from './src/store/reducers';

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const createStoreWithMiddleware = createStore(
  reducer,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

const appRedux = () => (
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => appRedux);
