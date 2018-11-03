import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
//map consts below
// import { baseURL } from '../credentials.env'
const { width, height  } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const Map = (props) => {
    return (
        <View>
            <Text style={{color: 'white'}}>
                Map Works!
            </Text>
        </View>
    )
}

export default Map
