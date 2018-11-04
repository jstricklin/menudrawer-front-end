/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebaseInit from './firebase.js'

import { MQ_KEY, MQ_SEARCH_URL } from 'react-native-dotenv'

AppRegistry.registerComponent(appName, () => App);
