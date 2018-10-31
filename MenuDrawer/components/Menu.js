import React from 'react'
import { View, Text } from 'react-native'

const Menu = (props) => {
    return (
        <View>
            <Text>{props.match.params.id}</Text>
        </View>
    )
}

export default Menu
