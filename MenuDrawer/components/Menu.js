import React, {Component} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Map from './Map'
import styles from '../styles'

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu: null
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.props.getMenu(this.props.match.params.id)
    }
    componentDidUpdate(){
        if (this.state.menu !== Object.values(this.props.menu)[0]){
            console.log(Object.values(this.props.menu)[0])
            this.setState({menu: Object.values(this.props.menu)[0]})
            let menuAddy = `${Object.values(this.props.menu)[0].address.street} ${Object.values(this.props.menu)[0].address.city} ${Object.values(this.props.menu)[0].address.zipCode}`
            console.log(menuAddy)
            this.props.getMenuCoords(menuAddy)
        }
    }
    render(){
        return (
            <View style={styles.contentContainer}>
                <View style={styles.searchContainer}>
                    <Text style={styles.title}> Menu </Text>
                    {this.state.menu ?
                    <View style={styles.menu}>
                        <View style={styles.menuHeader}>
                            <Text style={styles.title}>{this.state.menu.name}</Text>
                            <Text style={styles.subtitle}>{this.state.menu.address.street} {this.state.menu.address.city} {this.state.menu.address.state} </Text>
                        </View>
                        <ScrollView>
                        <View style={styles.mapContainer}>
                            <Map locationCoords={this.props.locationCoords}/>
                        </View>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>Menu Data</Text>
                    </ScrollView>
                    </View>
                    : <Text style={styles.mainTxt}>Loading Menu...</Text>}
                </View>
            </View>
            )
}
}

export default Menu
