/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';
import {NativeRouter, Route} from 'react-router-native'
import Welcome from './components/Welcome'
import Login from './components/Login'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    onPressHandler = () => {
        console.log("clicked!")
    }
    render() {
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route exact path='/' component={Login} />
                    <Route path='/welcome' component={Welcome} />
                </View>
            </NativeRouter>
            );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    loginBtn: {
        fontSize: 5,
        backgroundColor: 'skyblue',
    }
});
