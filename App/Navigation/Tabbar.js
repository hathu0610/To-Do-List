import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Tabbar extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        const { navigation } = this.props
        return (
            <View style = {{height:76,backgroundColor:'white',flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Text></Text>
                </View>
            </View>
        )
    }
}
