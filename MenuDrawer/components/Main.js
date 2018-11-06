import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import MenuDrawer from './MenuDrawer'
import Navigator from './Navigator'
import Header from './Header'
import Search from './Search'
import Explore from './Explore'
import Menu from './Menu'

import firebase from 'firebase'
import firebaseInit from '../firebase.js'
import 'firebase/database'

const userID = '12461241'
// MQ below

import { MQ_KEY, MQ_GEOCODE_URL, MQ_SEARCH_URL, GET_USER_DATA } from 'react-native-dotenv'

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
            menuDrawer: [],
            searchMenus: [],
            selectedMenu: {},
            searchTerms: "",
            mqRestaurants: [],
            locationCoords: {
                latitude: 0,
                longitude: 0,
            },
            menuLocation: {
                latitude: 0,
                longitude: 0,
            },
            markerLocations: [],
            userData: { }
        }
        this.startSearch = this.startSearch.bind(this)
        this.textChangeHandler = this.onTextChangeHandler.bind(this)
        this.getMenu = this.getMenu.bind(this)
        this.getMenuCoords = this.getMenuCoords.bind(this)
    }
    getUserData = () => {
        return fetch(`${GET_USER_DATA}/${userID}`)
            .then(res => res.json())
            .then(json => { console.log(json); return json })
            .then(json => this.setState({ userData : json.data }))
            .catch(err => console.log('getUserData error:', err))
    }
    getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let userLoc = new Object({ latitude: position.coords.latitude, longitude: position.coords.longitude })
            this.setState(prevState => ({ locationCoords:{ latitude: position.coords.latitude, longitude: position.coords.longitude } })
            )}, err => console.log(err))
    }
    getMenuCoords(address){
        console.log('fetching menu coords:', address)
        fetch(`${MQ_GEOCODE_URL}${address}`)
            .then(res => res.json())
            .then(json => this.setState({menuLocation: {
                latitude: json.results[0].locations[0].displayLatLng.lat,
                longitude: json.results[0].locations[0].displayLatLng.lng
            }}))
            .catch(err => console.log('get menu coords error', err) )
    }
    getMQRestaurants = () => {
        let terms = this.state.searchTerms.split(" ")
        let parsedTerms = terms.map(term => term += "%2C%20").join("")
        return fetch(`${MQ_SEARCH_URL}${this.state.locationCoords.longitude}%2C%20${this.state.locationCoords.latitude}&sort=distance&feedback=false&key=${MQ_KEY}&circle=${this.state.locationCoords.longitude}%2C%20${this.state.locationCoords.latitude}%2C%20100000&pageSize=10&q=restaurant%2C%20${parsedTerms}`)
            .then(res => res.json())
            .then(json => {console.log("terms: ", this.state.searchTerms, "results: ", json.results); return json.results})
            .catch(err => console.log('mq fetch error', err))
    }

    checkForMenu(restaurant){
        return fetch(`${getMenuURL}/${restaurant.displayString}`)
            .then(res => res.json())
            .then(json => {
                if (json.error){
                    this.setState(prevState => ({ mqRestaurants: [...prevState.mqRestaurants, restaurant] }))
                } else {
                    this.setState(prevState => ({ searchMenus: [...prevState.searchMenus, restaurant] }))
                }
            })
            .catch(err => console.log('check for menu error', err))

    }
    startSearch(){
        this.setState({
            mqRestaurants: [],
            searchMenus: []
        })
        this.getMQRestaurants()
            .then(mqRestArr => mqRestArr.map(restaurant => this.checkForMenu(restaurant)))
            .catch(err => console.log('get mq resturants error', err) )
    }
    onTextChangeHandler(text){
        this.setState({ searchTerms: text })
    }
    getUserMenus(){
        let userMenuIDs = Object.values(this.state.userData.menuIDs)
        userMenuIDs.map(id =>
            fetch(`${getMenuURL}/${id}`)
                .then(res => {console.log('res', res); return res})
                .then(res => res.json())
                .then(json => { console.log(json); return json })
                .then(json => this.setState(prevState => ({ menuDrawer: [...prevState.menuDrawer, json] })))
                .catch(err => console.log('get user menus err: ', err))
        )
        // return fetch(getUserMenusURL)
        //     .then(res => res.json())
        //     .then(json => {
        //         this.setState({ dummyMenus: json.menus});
        //         return json.menus
        //     })
        //     .catch(err => console.log('get user menus error', err) )
    }
    getMenu(id){
        return fetch(`${getMenuURL}/${id}`)
            .then(res => res.json())
            .then(json => this.setState({selectedMenu: json}))
            .catch(err => console.log('get menu error', err))
    }
    componentDidMount(){
        if (!firebase.apps.length){
            firebaseInit()
        }
        this.getUserLocation()
        this.getUserData().then(res => this.getUserMenus()).catch(err => console.log('getusermenuErr', err))
    }
    // / path should be Welcome for '/'
    render(){
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Header />
                    <Route path='/menus' render={(props) => <MenuDrawer {...props} menus={this.state.menuDrawer} />} />
                    <Route exact path='/' render={(props) => <Welcome {...props} /> }/>
                    <Route path='/search' render={(props)=> <Search {...props} searchTerms={this.state.searchTerms} textChangeHandler={this.textChangeHandler} startSearch={this.startSearch} locationCoords={this.state.locationCoords} searchMenus={this.state.searchMenus} mqRestaurants={this.state.mqRestaurants} markerLocations={this.state.markerLocations} />} />
                    <Route path='/explore' component={Explore} />
                    <Route path='/menu/:id' render={(props)=> <Menu {...props} menu={this.state.selectedMenu} getMenu={this.getMenu} getMenuCoords={this.getMenuCoords} locationCoords={this.state.menuLocation}/>}/>
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
