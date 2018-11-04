import React from 'react'
import { View, Text, TextInput, TouchableHighlight } from 'react-native'
import Map from './Map'
import styles from '../styles'

const Search = (props) => {
    return (
        <View style={{height: 650, alignItems: 'center', width:'100%'}}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex:1, alignItems:'center', alignSelf: 'stretch'}}>
                <Text style={{color: 'white', fontWeight:'600', paddingBottom:25, marginTop:25 }}> Find Menus to add to your Drawer </Text>
                <TextInput style={{ height: 50, backgroundColor: 'white', width: 250, paddingRight: 10, paddingLeft: 10 }} placeholder="Search for Menus" onChangeText={props.textChangeHandler} />
                <Text style={{color: 'white'}}>
                    {props.searchTerms}
                </Text>
                <TouchableHighlight onPress={props.startSearch} style={styles.searchBtn}>
                    <Text style={styles.btnTxt} >Search</Text>
                </TouchableHighlight>

                <View style={styles.mapContainer}>
                    <Map locationCoords={props.locationCoords}  />
                </View>
            </View>
        </View>
        )
}



export default Search;
