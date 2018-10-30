/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button } from 'react-native';
import {NativeRouter} from 'react-router-native'
import routes from './routes/Router.js'

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
                <Text style={styles.welcome}>Menu Drawer</Text>
                <View style={styles.loginBtn}>
                    <Button color="white" title="Sign Up or Log In" onPress={()=> console.log('Thank you')}> </Button>
                </View>
            </View>
            </NativeRouter>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00475D',
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
