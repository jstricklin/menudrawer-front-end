import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from '../styles'
import Map from './Map'

import { Link } from 'react-router-native'

const Explore = (props) => {
    return (
        <View style={styles.contentContainer}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 15, flex:1, alignItems:'center', alignSelf: 'stretch'}}>
                <Text style={styles.title}> Nearby Menus: </Text>
                <ScrollView style={{width:'100%', marginTop: 15}}>
                    <View style={styles.explorerContainer}>{props.explorerMenus ? props.explorerMenus.map(menu => <ExplorerMenuThumb menu={menu} key={menu.displayString}/>)
                        : <Text style={styles.mainTxt}>Menus are loading... </Text>}
                    </View>
                </ScrollView>
            </View>
        </View>
        )
}

const ExplorerMenuThumb = (props) => {
    console.log(props)
    let locationCoords = { latitude: props.menu.place.geometry.coordinates[1], longitude: props.menu.place.geometry.coordinates[0] }
    return (
        <Link to={`/menu/${props.menu.displayString}`}>
            <View style={styles.explorerThumb}>
                <Text style={styles.thumbTitle}> {props.menu.name} </Text>
                <Text style={styles.subtitle}>{props.menu.place.properties.street}, {props.menu.place.properties.city} {props.menu.place.properties.stateCode}, {props.menu.place.properties.postalCode}</Text>
                <View style={{margin: 10}}>
                    <Map locationCoords={locationCoords} />
                </View>
            </View>
        </Link>
        )
}

export default Explore;
