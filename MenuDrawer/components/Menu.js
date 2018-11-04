import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
            <View style={styles.container}>
                <View style={{height:650, backgroundColor: 'rgba(0,0,0,0.3)', width: '100%', alignItems:'center', paddingTop: 15}}>
                    <Text style={styles.title}> Menu </Text>
                    {this.state.menu ?
                    <View style={styles.menu}>
                        <Text style={styles.title}>{this.state.menu.name}</Text>
                        <Text style={styles.subtitle}>{this.state.menu.address}</Text>
                    <View>
                        <Map locationCoords={this.props.locationCoords}/>
                    </View>
                        <Text style={{ color: 'white', alignSelf: 'center' }}>Menu Data</Text>
                    </View>
                    : <Text style={styles.title}>Loading Menu...</Text>}
                </View>
            </View>
            )
}
}

export default Menu
