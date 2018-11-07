import React from 'react'
import { View, ScrollView, ListView, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import styles from '../styles'
import MenuThumb from './MenuThumb'

const populateMenus = (menus = [], removeMenu) => {
    return menus.map(menu => { console.log('populatemenus menu: ', menu); let menuID = Object.keys(menu)[0]; return <Link key={menuID} to={`/menu/${menuID}`} ><MenuThumb swipeoutBtns={[{ textSize: 5, text: 'Remove', type: 'delete', onPress: ()=>{removeMenu(menuID)} }]} menu={menu} /></Link>})
}

const MenuDrawer = (props) => {
    return (
        <View style={styles.contentContainer}>
                <View style={styles.menuDrawer}>
                <Text style={styles.drawerTitle}> Menu Drawer </Text>
                    <ScrollView style={styles.menuContainer}>
                        {populateMenus(props.menus, props.removeMenu)}
                    </ScrollView>
                </View>
        </View>
        )
}


export default MenuDrawer;
