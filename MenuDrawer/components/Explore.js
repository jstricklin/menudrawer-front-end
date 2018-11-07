import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

const Explore = (props) => {
    return (
        <View style={styles.contentContainer}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex:1, alignItems:'center', alignSelf: 'stretch'}}>
                <Text style={{color: 'white', fontWeight:'600', marginTop:25}}> Explorer Works! </Text>
            </View>
        </View>
        )
}

export default Explore;
