/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebaseInit from './firebase.js'

AppRegistry.registerComponent(appName, () => App);
