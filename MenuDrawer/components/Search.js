import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Search = (props) => {
    return (
        <View style={{height: 650, alignItems: 'center', width:'100%'}}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex:1, alignItems:'center', alignSelf: 'stretch'}}>
                <Text style={{color: 'white', fontWeight:'600', paddingBottom:25, marginTop:25 }}> Find Menus to add to your Drawer </Text>
                <TextInput style={{ height: 50, backgroundColor: 'white', width: 250, paddingRight: 10, paddingLeft: 10 }} placeholder="Search for Menus" onChangeText={props.textChangeHandler} />
            </View>
        </View>
        )
}

export default Search;
