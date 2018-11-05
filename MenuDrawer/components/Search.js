import React from 'react'
import { View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native'
import Map from './Map'
import styles from '../styles'
import MenuThumb from './MenuThumb'
import { Link } from 'react-router-native'

const Search = (props) => {
    return (
        <View style={{height: 650, alignItems: 'center', width:'100%'}}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex:1, alignItems:'center', alignSelf: 'stretch'}}>
                <Text style={{color: 'white', fontWeight:'600', paddingBottom:25, marginTop:25 }}> Find Menus to add to your Drawer </Text>
                <TextInput style={{ height: 50, backgroundColor: 'white', width: 250, paddingRight: 10, paddingLeft: 10 }} placeholder="Search for Menus" onChangeText={props.textChangeHandler} />
                <TouchableHighlight onPress={props.startSearch} style={styles.searchBtn}>
                    <Text style={styles.btnTxt} >Search</Text>
                </TouchableHighlight>
                <ScrollView style={{width: '100%', marginBottom: 70}}>
                    {props.mqRestaurants.length ? <View style={styles.mapContainer}>
                        <Map locationCoords={props.locationCoords}  />
                    </View> : null}
                    {props.searchMenus.map(restaurant => {console.log('restaurant', restaurant);
                    let restaurantData ={}
                    restaurantData[restaurant.displayString] = { name: restaurant.name, address: { city: restaurant.place.properties.city, street: restaurant.place.properties.street, state: restaurant.place.properties.state, zipCode: restaurant.place.properties.zipCode  }}

                    console.log('restaurant', restaurant)
                    console.log('restaurantData', restaurantData)

                        console.log(restaurantData);
                        return (<View style={styles.mapContainer} key={restaurant.displayString}>
                        <Link to={`/menu/${restaurant.displayString}`}><MenuThumb menu={restaurantData} /></Link>
                        </View>
                        )})}
                    {props.mqRestaurants.map(restaurant => (<View style={styles.mapContainer} key={restaurant.displayString}>
                        <Text style={styles.mainTxt}>{restaurant.name}</Text>
                        <Text style={styles.mainTxt}>{restaurant.place.properties.street} </Text>
                        </View>
                        ))}
                </ScrollView>
            </View>
        </View>
        )
}



export default Search;
