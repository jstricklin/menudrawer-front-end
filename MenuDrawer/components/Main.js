import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import MenuDrawer from './MenuDrawer'
import Navigator from './Navigator'
import Search from './Search'
import Explore from './Explore'
import Menu from './Menu'

import firebase from 'firebase'
import firebaseInit from '../firebase.js'
import 'firebase/database'

// firebase functions below
const getUserMenusURL = 'https://us-central1-menu-drawer-8c601.cloudfunctions.net/getUserMenus'
const getMenuURL = 'https://us-central1-menu-drawer-8c601.cloudfunctions.net/getMenu'

const Welcome = () => {
    return (
        <View style={{flex:1, width: '100%', justifyContent: 'center'}}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', padding: 25}}>
                <Text style={styles.welcome}>Welcome to your </Text>
                <Text style={styles.titleTxt}>Menu Drawer</Text>
            </View>
        </View>
        )
}

export default class Main extends Component<props> {
    constructor(props){
        super(props)
        this.state = {
            dummyMenus: [],
            dummyMenu: {},
        }
        // this.getDummyMenu = this.getDummyMenu.bind(this)
        this.getMenu = this.getMenu.bind(this)
    }
    // getDummyMenu(id){
    //     fetch(`${baseURL}/menu/${id}`)
    //         .then(res => res.json())
    //         .then(json => this.setState({dummyMenu: json}))
    // }
    getUserMenus(){
        return fetch(getUserMenusURL)
            .then(res => res.json())
            .then(json => {
                // for(let menu in json){
                //     console.log('menu', json[menu])
                // }
                this.setState({ dummyMenus: json.menus});
                return json.menus
            })
    }
    getMenu(name, address){
        console.log('checking menu', name, address)
        // firebase.database().ref('restaurants/').on('value', function(snapshot){
        //     console.log('checking..?')
        //     console.log('snapshot', snapshot.val())
        // })

        fetch(`${getMenuURL}/${name}/${address}`)
            .then(res => res.json())
            .then(json => { console.log('single menu', json); return json })
            .then(json => this.setState({dummyMenu: json}))
    }
    componentDidMount(){
        if (!firebase.apps.length){
            firebaseInit()
        }
        this.getUserMenus()
    }
    render(){
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route path='/menus' render={(props) => <MenuDrawer {...props} menus={this.state.dummyMenus} />} />
                    <Route exact path='/' render={(props) => <Welcome {...props} /> }/>
                    <Route path='/search' render={(props)=> <Search {...props} />} />
                    <Route path='/explore' component={Explore} />
                    <Route path='/menu/:name/:address' render={(props)=> <Menu {...props} menu={this.state.dummyMenu} getMenu={this.getMenu} />}/>
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
        // backgroundColor: '#00475D',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    welcome: {
        // height: 450,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    },
    titleTxt: {
        // height: 400,
        fontSize: 45,
        fontWeight:'600',
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
