import React, {Component} from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import Map from './Map'
import styles from '../styles'

const MenuSection =  (props) => {
    console.log('section data', props.section)
    console.log('section name', props.name)
    return (
        <View style={styles.menuSection}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}> {props.name} </Text>
            </View>
            <View style={styles.sectionBody}>
                {Object.keys(props.section).map(key => <View key={key} style={styles.menuItem}><Text style={styles.menuTxt}>{key}</Text><View style={styles.itemLine}></View><Text style={styles.menuTxt}>${props.section[key].price}</Text></View>)}
            </View>
        </View>
        )
}

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
            // console.log(Object.values(this.props.menu)[0])
            this.setState({menu: Object.values(this.props.menu)[0]})
            let menuAddy = `${Object.values(this.props.menu)[0].address.street} ${Object.values(this.props.menu)[0].address.city} ${Object.values(this.props.menu)[0].address.zipCode}`
            // console.log('single menu', Object.values(this.props.menu)[0].menu)
            // console.log(Object.values(this.props.menu)[0].menu)
            this.props.getMenuCoords(menuAddy)
        }
    }
    render(){
        console.log(Object.keys(this.props.menu)[0])
        return (
            <View style={styles.contentContainer}>
                <View style={styles.menuContainer}>
                    {this.state.menu ?
                    <View style={styles.menu}>
                        <View style={styles.menuHeader}>
                            <View style={{ alignSelf: 'center' }}>
                            <Text style={styles.title}>{this.state.menu.name}</Text>
                            <Text style={styles.subtitle}>{this.state.menu.address.street} {this.state.menu.address.city} {this.state.menu.address.state} </Text>
                        </View>
                        <TouchableHighlight onPress={() => this.props.addMenu(Object.keys(this.props.menu)[0])}>
                                <View style={styles.menuAddBtn}>
                                    <Text style={{color: 'white'}}>Add Menu</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <ScrollView>
                            <View style={styles.mapContainer}>
                                <Map locationCoords={this.props.locationCoords}/>
                            </View>
                            {Object.values(this.props.menu)[0].menu ?

                            <View>
                                {
                                Object.keys(Object.values(this.props.menu)[0].menu).map(section => <MenuSection key={section} name={section} section={Object.values(this.props.menu)[0].menu[section]}  />)}
                            </View>

                            : null }
                        </ScrollView>
                    </View>
                    : <Text style={styles.mainTxt}>Loading Menu...</Text>}
                </View>
            </View>
            )
    }
}

export default Menu
