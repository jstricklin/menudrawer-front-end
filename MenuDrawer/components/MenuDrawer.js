import React from 'react'
import { View, ScrollView, ListView, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'

const MenuThumb = (props) => {
    return (
        <View style={styles.menuThumb}>
             <Text>{props.menu.name}</Text>
            <Text>{props.menu.address}</Text>
        </View>
        )
}

const populateMenus = (menus = []) => {
    console.log(menus)
    return menus.map(menu => <Link key={menu.id} to={`/menu/${menu.id}`} ><MenuThumb menu={menu} /></Link>)
}

const MenuDrawer = (props) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}> Saved Menus </Text>
            <View style={styles.container}>
            <ScrollView style={styles.menuContainer}>
                {populateMenus(props.menu)}
            </ScrollView>
        </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ad6d5d',
        height: 500,
        width: 300,
    },
    title: {
        color: 'white',
        marginTop: 10,
        marginBottom: 25,
        fontSize: 30,
        fontWeight: 'bold'
    },
    menuContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    menuThumb: {
        margin: 10,
        padding: 10,
        backgroundColor: '#f4a93f'
    }
})

export default MenuDrawer;
