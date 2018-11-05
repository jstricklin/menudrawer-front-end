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
            dummyMenus: [],
            searchMenus: [],
            dummyMenu: {},
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
            userData: { }
        }
        this.startSearch = this.startSearch.bind(this)
        this.textChangeHandler = this.onTextChangeHandler.bind(this)
        this.getMenu = this.getMenu.bind(this)
        this.getMenuCoords = this.getMenuCoords.bind(this)
    }
    getUserData = () => {
        fetch(`${GET_USER_DATA}/${userID}`)
            .then(res => res.json())
            .then(json => this.setState({ userData : json.data }))
    }
    getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({ locationCoords:{ latitude: position.coords.latitude, longitude: position.coords.longitude }})
        }, err => console.log(err))

    }
    getMenuCoords(address){
        fetch(`${MQ_GEOCODE_URL}${address}`)
            .then(res => res.json())
            .then(json => this.setState({menuLocation: {
                latitude: json.results[0].locations[0].displayLatLng.lat,
                longitude: json.results[0].locations[0].displayLatLng.lng
            }}))
    }
    getMQRestaurants = () => {
        let terms = this.state.searchTerms.split(" ")
        let parsedTerms = terms.map(term => term += "%2C%20").join("")
        return fetch(`${MQ_SEARCH_URL}${this.state.locationCoords.longitude}%2C%20${this.state.locationCoords.latitude}&sort=distance&feedback=false&key=${MQ_KEY}&circle=${this.state.locationCoords.longitude}%2C%20${this.state.locationCoords.latitude}%2C%20100000&pageSize=50&q=restaurant%2C%20${parsedTerms}`)
            .then(res => res.json())
            .then(json => {console.log("terms: ", this.state.searchTerms, "results: ", json.results); return json.results})
    }

    checkForMenu(restaurant){
        return fetch(`${getMenuURL}/${restaurant.displayString}`)
            .then(res => res.json())
            .then(json => {
                if (json.error){
                    console.log(json.error)
                    this.setState(prevState => ({ mqRestaurants: [...prevState.mqRestaurants, restaurant] }))
                } else {
                    console.log(restaurant)
                    this.setState(prevState => ({ searchMenus: [...prevState.searchMenus, restaurant] }))
                }
            })

    }
    startSearch(){
        this.setState({
            mqRestaurants: [],
            searchMenus: []
        })
        this.getMQRestaurants()
            .then(mqRestArr => mqRestArr.map(restaurant => this.checkForMenu(restaurant)))
    }
    onTextChangeHandler(text){
        this.setState({ searchTerms: text })
    }
    getUserMenus(){
        return fetch(getUserMenusURL)
            .then(res => res.json())
            .then(json => {
                this.setState({ dummyMenus: json.menus});
                return json.menus
            })
    }
    getMenu(name, address){
        fetch(`${getMenuURL}/${name}/${address}`)
            .then(res => res.json())
            .then(json => this.setState({dummyMenu: json}))
    }
    componentDidMount(){
        if (!firebase.apps.length){
            firebaseInit()
        }
        this.getUserLocation()
        this.getUserData()
        // this.getUserMenus()
    }
    // / path should be Welcome for '/'
    render(){
        return (
            <NativeRouter>
                <View style={styles.container}>
                    <Route path='/menus' render={(props) => <MenuDrawer {...props} menus={this.state.dummyMenus} />} />
                    <Route exact path='/' render={(props) => <Welcome {...props} /> }/>
                    <Route path='/search' render={(props)=> <Search {...props} searchTerms={this.state.searchTerms} textChangeHandler={this.textChangeHandler} startSearch={this.startSearch} locationCoords={this.state.locationCoords} searchMenus={this.state.searchMenus} mqRestaurants={this.state.mqRestaurants} />} />
                    <Route path='/explore' component={Explore} />
                    <Route path='/menu/:id' render={(props)=> <Menu {...props} menu={this.state.dummyMenu} getMenu={this.getMenu} getMenuCoords={this.getMenuCoords} locationCoords={this.state.menuLocation}/>}/>
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
