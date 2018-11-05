import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

const MenuThumb = (props) => {
    return (
        <View style={styles.menuThumb}>
            <Text style={styles.mainTxt}>{props.menu.name}</Text>
            <Text style={styles.mainTxt}>{props.menu.address}</Text>
        </View>
        )
}

export default MenuThumb
