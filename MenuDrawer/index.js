/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebaseInit from './firebase.js'
require('./credentials.env')

AppRegistry.registerComponent(appName, () => App);
