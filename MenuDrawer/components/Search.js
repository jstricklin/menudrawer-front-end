import React from 'react'
import { View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import Map from './Map'
import styles from '../styles'
import MenuThumb from './MenuThumb'
import { Link } from 'react-router-native'

const Search = (props) => {
    return (
        <View style={styles.contentContainer} >
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex:1, alignItems:'center', alignSelf: 'stretch'}}>
                <Text style={{color: 'white', fontWeight:'600', paddingBottom:25, marginTop:25 }}> Find Menus to add to your Drawer </Text>
                <TextInput style={{ height: 50, backgroundColor: 'white', width: 250, paddingRight: 10, paddingLeft: 10 }} placeholder="Search for Menus" onChangeText={props.textChangeHandler} />
                <TouchableHighlight onPress={props.startSearch} style={styles.searchBtn}>
                    <Text style={styles.btnTxt} >Search</Text>
                </TouchableHighlight>
                {props.mqRestaurants.length ? <View style={styles.mapContainer}>
                    <Map markerLocations={props.markerLocations} locationCoords={props.locationCoords}  />
                </View> : null}
                <ScrollView style={{width: '100%', marginBottom: 5, flex: 1}}>
                    <View style={styles.searchContainer} >
                        {props.searchMenus.map(restaurant => {console.log('restaurant', restaurant);
                        let restaurantData ={}
                        restaurantData[restaurant.displayString] = { name: restaurant.name, address: { city: restaurant.place.properties.city, street: restaurant.place.properties.street, state: restaurant.place.properties.state, zipCode: restaurant.place.properties.zipCode  }}

                        // console.log('searchMenu', restaurant)
                        // console.log('restaurantData', restaurantData)

                        // console.log(restaurantData);
                        return (<View key={restaurant.displayString}>
                            <Link to={`/menu/${restaurant.displayString}`}><MenuThumb menu={restaurantData} /></Link>
                        </View>
                        )})}
                        {props.mqRestaurants.map(restaurant => (<View key={restaurant.displayString}>
                            <RestaurantThumb name={restaurant.name} address={`${restaurant.place.properties.street} ${restaurant.place.properties.stateCode} ${restaurant.place.properties.postalCode}`}/>
                        </View>
                        ))}
                    </View>
                </ScrollView>
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
