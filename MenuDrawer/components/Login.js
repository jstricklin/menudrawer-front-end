import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native'

export default class Login extends Component<props> {
    render(){
       return (
    <View style={styles.container}>
        <Text style={styles.login}>Menu Drawer</Text>
        <View style={styles.loginBtn}>
            <Link to='/welcome' ><View style={styles.loginBtn}><Text>Login or Signup</Text></View></Link>
        </View>
    </View>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00475D',
    },
    login: {
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
        padding: 3,
        borderRadius: 3,
        backgroundColor: 'skyblue',
    }
});
