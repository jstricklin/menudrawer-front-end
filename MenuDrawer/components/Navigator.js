import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import styles from '../styles'
// import FontAwesome, { Icons } from 'react-native-fontawesome'

const Navigator = (props) => {
    return (
        <View style={styles.navBar}>
            <Link to='/menus'><Text style={{color: 'white'}}>Drawer</Text></Link>
            <Link to='/search'><Text style={{color: 'white'}}>Search</Text></Link>
            <Link to='/explore'><Text style={{color: 'white'}}>Explore</Text></Link>
        </View>
    )
}

export default Navigator
