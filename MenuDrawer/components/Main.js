import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import MenuDrawer from './MenuDrawer'
import Navigator from './Navigator'
import Search from './Search'
import Explore from './Explore'
import Menu from './Menu'

const baseURL = 'http://localhost:8080'

const Welcome = () => {
    return (
        <Text style={styles.welcome}> Welcome! Thanks for signing in </Text>
        )
}

export default class Main extends Component<props> {
    constructor(props){
        super(props)
        this.state = {
            dummyMenus: [],
            dummyMenu: {},
        }
        this.getDummyMenu = this.getDummyMenu.bind(this)
    }
    getDummyMenu(id){
        fetch(`${baseURL}/menu/${id}`)
            .then(res => res.json())
            .then(json => this.setState({dummyMenu: json}))
    }
    componentDidMount(){
        fetch(`${baseURL}/menus`)
            .then(res => res.json())
            .then(json => this.setState({dummyMenus: json}))
    }
    render(){
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route path='/menus' render={(props) => <MenuDrawer {...props} menu={this.state.dummyMenus.menus} />} />
                    <Route exact path='/' render={(props) => <Welcome {...props} /> }/>
                    <Route path='/search' render={(props)=> <Search {...props} />} />
                    <Route path='/explore' component={Explore} />
                    <Route path='/menu/:id' render={(props)=> <Menu {...props} menu={this.state.dummyMenu.menu} getDummyMenu={this.getDummyMenu} />}/>
                    <Navigator />
                </View>
    </NativeRouter>
    )}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#00475D',
    },
    welcome: {
        height: 450,
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
