import React from 'react'
import { View, Text } from 'react-native'

const Explore = (props) => {
    return (
        <View style={{height: 650, alignItems: 'center', width: '100%'}}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex:1, alignItems:'center', alignSelf: 'stretch'}}>
                <Text style={{color: 'white', fontWeight:'600', marginTop:25}}> Explorer Works! </Text>
            </View>
        </View>
        )
}

export default Explore;
