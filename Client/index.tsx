/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {setupStore} from './app/redux/store';
import 'react-native-gesture-handler';

export const Root = (): JSX.Element => {
  return (
    <Provider store={setupStore()}>
      <App />
    </Provider>
  );
};

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <Root />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
