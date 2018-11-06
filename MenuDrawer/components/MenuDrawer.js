import React from 'react'
import { View, ScrollView, ListView, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import styles from '../styles'
import MenuThumb from './MenuThumb'

const populateMenus = (menus = []) => {
    return menus.map(menu => { console.log('populatemenus menu: ', menu); let menuID = Object.keys(menu)[0]; return <Link key={menuID} to={`/menu/${menuID}`} ><MenuThumb menu={menu} /></Link>})
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


export default MenuDrawer;
