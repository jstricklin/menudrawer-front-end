import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

const MenuThumb = (props) => {
    console.log('menuthumb props.menu', props.menu)
    const menuID = Object.keys(props.menu)[0]
    const menuData = Object.values(props.menu)[0]
    console.log('menu thumb menu data: ', menuData)
    return (
        <View style={styles.menuThumb}>
            <Text style={styles.mainTxt}>{menuData.name}</Text>
            <Text style={styles.mainTxt}>{menuData.address.street} {menuData.address.city} {menuData.address.state} {menuData.address.zipCode}</Text>
        </View>
        )
}

export default MenuThumb
