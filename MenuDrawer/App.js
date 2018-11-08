/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ImageBackground, Button } from 'react-native';
import {NativeRouter, Route} from 'react-router-native'
import Main from './components/Main'
import Login from './components/Login'
import bg from './assets/heeseon-kim-1114947-unsplash.jpg'

//test firebase below

import firebase from 'firebase'
import firebaseInit from './firebase.js'
import 'firebase/database'

// auth below
import { onLogin } from './auth'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated: false,
            userID: '',
            accessToken: '',
        }
        this.handleLogin = this.handleLogin.bind(this)

    }
    handleLogin =()=> {
        onLogin()
            .then(res => {
                console.log('app.js res: ', res);
                if (res.accessToken){
                    this.setState({ isAuthenticated: true,  userID: res.idToken, accessToken: res.accessToken })
                }
            })
    }
    componentDidMount(){

    }
    render() {
        return (
            <NativeRouter>
                <ImageBackground blurRadius={15} resizeMode='cover' source={bg} style={styles.container}>
                    {/* change below for default first scene -- deploy with Login Component at '/' path */}
                    { this.state.isAuthenticated ? <Route path='/' component={Main} /> :
                    <Route exact path='/' render={ (props)=> <Login {...props} onLogin={this.handleLogin} /> } /> }
                </ImageBackground>
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
