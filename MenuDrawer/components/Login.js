import React, { Component } from 'react';
import { Platform, TouchableHighlight, StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native'
import {AUTH_DOMAIN, AUTH_CLIENT_ID} from 'react-native-dotenv'

// import auth0 from 'react-native-auth0'
// const auth0 = new Auth0({ domain: AUTH_DOMAIN, clientId: AUTH_CLIENT_ID  })

export default class Login extends Component<props> {
    render(){
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', paddingTop:50, paddingBottom:50, width: '100%' }}>
                    <Text style={styles.title}>Menu Drawer</Text>
                    <View style={styles.loginBtn}>
                        <TouchableHighlight onPress={this.props.onLogin}><Text style={styles.login}>Login or Signup</Text></TouchableHighlight>
                    </View>
                </View>
            </View>
            )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#00475D',
        backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    login: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    },
    loginBtn: {
        alignSelf: 'center',
        padding: 3,
        borderRadius: 3,
        backgroundColor: 'skyblue',
    },
    title: {
        alignSelf: 'center',
        fontSize: 50,
        marginBottom: 50,
        fontWeight: 'bold',
        color: '#ffffff'
    }
});
