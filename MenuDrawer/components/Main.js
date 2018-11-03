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

// MQ below

const MQ_KEY="AvgVnMA8ethCWCJijX8T0aDMz0YWzUi9"
const MQ_SEARCH_URL="http://www.mapquestapi.com/geocoding/v1/address?key=AvgVnMA8ethCWCJijX8T0aDMz0YWzUi9&location="

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
            searchTerms: "",
            locationCoords: {
                latitude: '',
                longitude: '',
            }
        }
        this.textChangeHandler = this.onTextChangeHandler.bind(this)
        this.getMenu = this.getMenu.bind(this)
    }
    getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({ locationCoords:{ latitude: position.coords.latitude, longitude: position.coords.longitude }})
            console.log(this.state.locationCoords)
        }, err => console.log(err))

    }

    startSearch(){

    }
    onTextChangeHandler(text){
        this.setState({ searchTerms: text })
    }
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

        fetch(`${getMenuURL}/${name}/${address}`)
            .then(res => res.json())
            .then(json => { console.log('single menu', json); return json })
            .then(json => this.setState({dummyMenu: json}))
    }
    componentDidMount(){
        if (!firebase.apps.length){
            firebaseInit()
        }
        this.getUserLocation()
        this.getUserMenus()
    }
    // / path should be Welcome for '/'
    render(){
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route path='/menus' render={(props) => <MenuDrawer {...props} menus={this.state.dummyMenus} />} />
                    <Route exact path='/search' render={(props) => <Welcome {...props} /> }/>
                    <Route path='/' render={(props)=> <Search {...props} searchTerms={this.state.searchTerms} textChangeHandler={this.textChangeHandler} locationCoords={this.state.locationCoords} />} />
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
