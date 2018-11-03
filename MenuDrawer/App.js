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

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    componentDidMount(){
        firebaseInit()
        firebase.database().ref('dummyRestaurants/').on('value', (snapshot)=>{
            console.log('all menus', snapshot.val())
        })
        // let name = "Wendy's"
        // let address = "45 S Washington, Denver CO 80209"
        // firebase.database().ref('dummyRestaurants/').orderByKey().equalTo(`${name}`).on('value', (snapshot)=>{
        //     for( name in snapshot.val() ){
        //         for( menuAddress in snapshot.val()[name]){
        //             if (address == menuAddress){
        //                 var newMenu = {
        //                     name: name,
        //                     address: address,
        //                     menu: snapshot.val()[name][menuAddress].menu
        //                 }
        //                 console.log(newMenu)
        //             }
        //         }
        //     }
        // })
        // get all test below
        // firebase.database().ref('dummyRestaurants/').on('value', function(snapshot){
        //     // console.log('key', Object.values(snapshot.val()))
        //     let menuArr = []
        //     for(let restaurant in snapshot.val()){
        //         // console.log('data', snapshot.val()[restaurant])
        //         // console.log('restaurant', restaurant)
        //         // console.log('address', Object.keys(snapshot.val()[restaurant]))
        //         // try to grab menus below
        //         Object.keys(snapshot.val()[restaurant]).map(addy => {
        //             // console.log('rest',snapshot.val()[restaurant][addy].menu)
        //             // console.log(addy)
        //             let menu = {
        //                name: restaurant,
        //                 address: addy,
        //                 menuData: snapshot.val()[restaurant][addy].menu
        //             }
        //             menuArr.push(menu)
        //         })
        //         // console.log('single menu', Object.values(snapshot.val()[restaurant])
        // // )
        //     }
        //         console.log('menu array:', menuArr)
        // })
    }
    render() {
        return (
            <NativeRouter>
                <ImageBackground blurRadius={15} resizeMode='cover' source={bg} style={styles.container}>
                    <Route exact path='/' component={Login} />
                    <Route path='/welcome' component={Main} />
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
