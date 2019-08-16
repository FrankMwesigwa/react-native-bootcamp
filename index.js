/* eslint-disable no-console */
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import App from './App';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
