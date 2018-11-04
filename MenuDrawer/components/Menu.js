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
        this.props.getMenu(this.props.match.params.name, this.props.match.params.address)
    }
    componentDidUpdate(){
        if (this.state.menu !== Object.values(this.props.menu)[0]){
            this.setState({menu: Object.values(this.props.menu)[0]})
            this.props.getMenuCoords(Object.values(this.props.menu)[0].address)
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
                            <Text style={styles.subtitle}>{this.state.menu.address}</Text>
                        </View>
                        <ScrollView>
                        <View style={styles.mapContainer}>
                            <Map locationCoords={this.props.locationCoords}/>
                        </View>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>Menu Data</Text>
                    </ScrollView>
                    </View>
                    : <Text style={styles.title}>Loading Menu...</Text>}
                </View>
            </View>
            )
}
}

export default Menu
