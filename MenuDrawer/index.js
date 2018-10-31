/** @format */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux/';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class reduxApp extends React.Component{
    render(){
        return (<Provider store={store}><App /></Provider>)
    }
}
AppRegistry.registerComponent(appName, () => reduxApp);
