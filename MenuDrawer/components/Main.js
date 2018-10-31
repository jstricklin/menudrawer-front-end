import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import MenuDrawer from './MenuDrawer'
import Navigator from './Navigator'
import Search from './Search'
import Explore from './Explore'

const Welcome = () => {
    return (
        <Text style={styles.welcome}> Welcome! Thanks for signing in </Text>
        )
}

export default class Main extends Component<props> {
    render(){
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route path='/menus' component={MenuDrawer} />
                    <Route exact path='/' component={Welcome} />
                    <Route path='/search' component={Search} />
                    <Route path='/explore' component={Explore} />
                    <Navigator />
                </View>
    </NativeRouter>
    )}
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
