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
            <Text style={{color: 'white', alignSelf: 'center'}}>
                {props.locationCoords.latitude}, {props.locationCoords.longitude}
            </Text>
            <View style={{ height: 200, width: 200 }}>
                <MapView style={{color: 'white'}}
                    region={{
                    latitude: props.locationCoords.latitude,
                    longitude: props.locationCoords.longitude,
                    latitudeDelta: .01,
                    longitudeDelta: .01 * ASPECT_RATIO,
                    }}
                >
                    <Marker coordinate={props.locationCoords} title="result" description="test desc" />
                </MapView>
            </View>

        </View>
        )
}

export default Map
