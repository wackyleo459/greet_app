/**
 * @format
 */
import 'react-native-polyfill-globals/auto';
import 'react-native-fetch-api';
// import {polyfill as polyfillFetch} from 'react-native-polyfill-globals/src/fetch';
import 'fast-text-encoding';
import {AppRegistry} from 'react-native';
import App from './src/App.tsx';
import {name as appName} from './app.json';
// polyfillFetch();

AppRegistry.registerComponent(appName, () => App);
