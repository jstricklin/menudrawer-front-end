import React from 'react'
import { View, ScrollView, ListView, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import styles from '../styles'

const MenuThumb = (props) => {
    return (
        <View style={styles.menuThumb}>
            <Text style={styles.mainTxt}>{props.menu.name}</Text>
            <Text style={styles.mainTxt}>{props.menu.address}</Text>
        </View>
        )
}

const populateMenus = (menus = []) => {
    return menus.map(menu => <Link key={menu.address} to={`/menu/${menu.name}/${menu.address}`} ><MenuThumb menu={menu} /></Link>)
}

const MenuDrawer = (props) => {
    return (
        <View style={styles.contentContainer}>
                <Text style={styles.drawerTitle}> Saved Menus </Text>
                <View style={styles.menuDrawer}>
                    <ScrollView style={styles.menuContainer}>
                        {populateMenus(props.menus)}
                    </ScrollView>
                </View>
        </View>
        )
}

// const styles = StyleSheet.create({
//     container: {
//         alignSelf: 'stretch',
//         justifyContent: 'flex-start',
//         // backgroundColor: '#ad6d5d',
//         backgroundColor: 'rgba(0,0,0,0.5)',
//         height: 650,
//     },
// })

export default MenuDrawer;
