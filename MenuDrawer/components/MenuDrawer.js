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
    return menus.map(menu => <Link key={menu.address} to={`/menu/${menu.name}/${menu.address}`} ><MenuThumb menu={menu} /></Link>)
}

const MenuDrawer = (props) => {
    return (
        <View style={{alignSelf: 'stretch'}}>
            <View style={styles.container}>
                <Text style={styles.title}> Saved Menus </Text>
                <View style={styles.menuDrawer}>
                    <ScrollView style={styles.menuContainer}>
                        {populateMenus(props.menus)}
                    </ScrollView>
                </View>
            </View>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        // backgroundColor: '#ad6d5d',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 650,
    },
    menuDrawer: {
        flex:1,
        backgroundColor: 'rgba(75, 25, 25, 0.6)',
        borderColor: '#ad6d5d',
        borderRightWidth: 10,
        borderLeftWidth:10,
        borderTopWidth:10,
        borderBottomWidth: 0,
    },
    title: {
        alignSelf: 'center',
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
