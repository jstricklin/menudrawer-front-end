import React from 'react'
import { View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import Map from './Map'
import styles from '../styles'
import MenuThumb from './MenuThumb'
import { Link } from 'react-router-native'

const Search = (props) => {
    return (
        <View style={styles.contentContainer} >
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex:1, paddingTop: 15, paddingBottom: 75, alignItems:'center', alignSelf: 'stretch'}}>
                {props.mqRestaurants.length ? <View style={styles.mapContainer}>
                    <Map markerLocations={props.markerLocations} locationCoords={props.locationCoords}  />
                </View> : null}
                <ScrollView style={{width: '100%', marginBottom: 5, flex: 1,}}>
                    <View style={styles.searchContainer} >
                        {props.searchMenus.map(restaurant => {
                        let restaurantData ={}
                        restaurantData[restaurant.displayString] = { name: restaurant.name, address: { city: restaurant.place.properties.city, street: restaurant.place.properties.street, state: restaurant.place.properties.state, zipCode: restaurant.place.properties.zipCode  }}

                        // console.log('searchMenu', restaurant)
                        // console.log('restaurantData', restaurantData)

                        // console.log(restaurantData);
                        return (<View key={restaurant.displayString}>
                            <Link to={`/menu/${restaurant.displayString}`}><MenuThumb swipeoutBtns={[{ textSize: 5, text: 'Add Menu', type: 'primary', onPress: ()=>{props.addMenu(restaurant.displayString)} }]} menu={restaurantData} /></Link>
                        </View>
                        )})}
                        {props.mqRestaurants.map(restaurant => (<View key={restaurant.displayString}>
                            <RestaurantThumb name={restaurant.name} address={`${restaurant.place.properties.street} ${restaurant.place.properties.stateCode} ${restaurant.place.properties.postalCode}`}/>
                        </View>
                        ))}
                    </View>
                </ScrollView>
                <TextInput style={{ height: 30, marginTop: 10, backgroundColor: 'white', width: 250, paddingRight: 10, paddingLeft: 10 }} placeholder="search for new menus" onChangeText={props.textChangeHandler} />
                <TouchableHighlight onPress={props.startSearch} style={styles.searchBtn}>
                    <Text style={styles.btnTxt} >Search</Text>
                </TouchableHighlight>
        </View>
    </View>
    )
}

const RestaurantThumb = (props) => {
    return (
        <View style={styles.restaurantThumb}>
            <Text style={styles.mainTxt}> {props.name} </Text>
            <Text style={styles.mainTxt}> {props.address} </Text>
        </View>
    )
}


export default Search;
