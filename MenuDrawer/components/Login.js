import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native'

const Login = (props) => {
       return (
    <View style={styles.container}>
        <Text style={styles.welcome}>Menu Drawer</Text>
        <View style={styles.loginBtn}>
            <Button color="white" title="Sign Up or Log In" onPress={()=> console.log('Thank you')}> </Button>
        </View>
    </View>
    )
}

export default Login

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
