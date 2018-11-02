import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'


class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            menu: null
        }
    }
    componentDidMount(){
        console.log(this.props.menu)
        this.props.getMenu(this.props.match.params.id)
    }
    componentDidUpdate(){
        if (this.state.menu !== this.props.menu){
            this.setState({menu: this.props.menu})
        }
    }
    render(){
        return (
            <View style={styles.container}>
                {this.state.menu ? <View style={styles.menu}>
                    <Text style={styles.title}>{this.state.menu.menuData.name}</Text>
                    <Text>{this.state.menu.menuData.address}</Text>
                </View>
                : null}
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#ad6d5d',
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    menu: {
        alignSelf: 'stretch',
        alignItems: 'center',
        color: 'white',
        height: 650,
        backgroundColor: '#f4a93f'
    }
})

export default Menu
