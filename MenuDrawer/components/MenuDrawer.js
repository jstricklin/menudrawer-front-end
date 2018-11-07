import React from 'react'
import { View, ScrollView, ListView, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import styles from '../styles'
import MenuThumb from './MenuThumb'

const populateMenus = (menus = [], removeMenu) => {
    return menus.map(menu => { console.log('populatemenus menu: ', menu); let menuID = Object.keys(menu)[0]; return <Link key={menuID} to={`/menu/${menuID}`} ><MenuThumb swipeoutBtns={[{ textSize: 5, text: 'Remove', type: 'delete', onPress: ()=>{removeMenu(menuID)} }]} menu={menu} /></Link>})
}

class MenuDrawer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menus : []
        }
    }
    componentDidUpdate(){
        if (this.state.menus.length !== this.props.menus.length){
            this.setState({menus : []})
            this.setState({menus: this.props.menus})
        }
    }
    componentDidMount(){
        this.setState({ menus: this.props.menus })
    }
    render(){
        return (
            <View style={styles.contentContainer}>
                <View style={styles.menuDrawer}>
                    <Text style={styles.drawerTitle}> Menu Drawer </Text>
                    <ScrollView style={styles.menuContainer}>
                        {populateMenus(this.state.menus, this.props.removeMenu)}
                    </ScrollView>
                </View>
            </View>
            )
    }
}


export default MenuDrawer;
