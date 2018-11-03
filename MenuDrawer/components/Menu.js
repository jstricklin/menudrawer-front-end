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
        this.props.getMenu(this.props.match.params.id)
    }
    componentDidUpdate(){
        if (this.state.menu !== Object.values(this.props.menu)[0]){
            this.setState({menu: Object.values(this.props.menu)[0]})
            console.log({menu: Object.values(this.props.menu)[0]})
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
                        <Text style={{ color: 'white', alignSelf: 'center' }}>Menu Data</Text>
                    </View>
                    : <Text style={styles.title}>Loading Menu...</Text>}
                    <View>

                    </View>
                </View>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        height: 650,
        alignItems: 'center',
        // padding: 15,
        // backgroundColor: '#ad6d5d',
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center',
    },
    menu: {
        alignSelf: 'stretch',
        // alignItems: 'center',
        color: 'white',
        marginTop: 15,
        height: 650,
        backgroundColor: '#f4a93f'
    }
})

export default Menu
