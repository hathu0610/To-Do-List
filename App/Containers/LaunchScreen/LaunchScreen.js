import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, SafeAreaView,ImageBackground } from 'react-native'
import { Images } from '../../Themes'

// Styles
import styles from '../Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
        <View style = {{backgroundColor:'#3867d5',width:'100%',height:'100%'}}>
          <SafeAreaView style={{margin:18,marginTop:60}}>
            <View style = {{flexDirection:'row', justifyContent:'space-between',paddingBottom:25}}>
                <View>
                    <Text style = {{fontSize: 20,color:'white'}}>Hello Thu!</Text>
                    <Text style = {{fontSize: 13,color:'white'}}>Today you have 9 tasks</Text>
                </View>
                <View >
                    <Image style={{width:50, height:50, borderRadius:25,backgroundColor:'white',resizeMode:'contain'}} source = {{uri:'https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/34837294_1783082088473289_490901267145555968_n.jpg?_nc_cat=108&_nc_ohc=cwI8-bnYYi4AX-32TN3&_nc_ht=scontent.fhan5-5.fna&oh=9aac2614789b09306fcdadcae2490bac&oe=5ECAF718'}}></Image>
                </View>
            </View>
            
                
            <View style = {{borderRadius:5,width:'100%',height:106, backgroundColor:'rgba(255, 255, 255,0.3)',flexDirection:'row', justifyContent:'space-between',padding:16}}>
                <View >
                    <Text style = {{fontSize: 20,color:'white'}}>Today Reminder</Text>
                    <Text style = {{fontSize: 13,color:'white',paddingTop:5}}>Meeting with client</Text>
                    <Text style = {{fontSize: 13,color:'white',paddingTop:5}}>13.30 PM</Text>
                </View>
                <View >
                  <Image style={{width:73, height:73,resizeMode:'contain',marginRight:10}} source={require('../../Images/Icons/bell1.png')}></Image>
                </View>
            </View>
            </SafeAreaView>

            <View style={{paddingTop:16,backgroundColor:'white',height:'100%'}}>
            <SafeAreaView style={{marginLeft:18}}>
                <Text style = {{color:'rgb(139, 135, 179)'}}>Today</Text>
            </SafeAreaView>

            </View>
        </View>

    )
  }
}
