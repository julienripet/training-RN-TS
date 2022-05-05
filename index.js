/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, {StrictMode} from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

AppRegistry.registerComponent(appName, () => Root);
