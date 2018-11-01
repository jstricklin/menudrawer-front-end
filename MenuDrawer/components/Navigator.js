import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
// import FontAwesome, { Icons } from 'react-native-fontawesome'

const Navigator = (props) => {
    return (
        <View style={styles.container}>
            <Link to='/menus'><Text style={{color: 'white'}}>Drawer</Text></Link>
            <Link to='/search'><Text style={{color: 'white'}}>Search</Text></Link>
            <Link to='/explore'><Text style={{color: 'white'}}>Explore</Text></Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 75,
        alignSelf: 'stretch',
        alignItems: 'center',
        position: 'absolute', left: 0, right: 0, bottom: 0,
        backgroundColor: '#ad6d5d',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default Navigator
