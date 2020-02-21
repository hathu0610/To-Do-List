import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, SafeAreaView,TouchableOpacity} from 'react-native'
import { Images } from '../../Themes'
import { SwipeListView } from 'react-native-swipe-list-view';


// Styles
import styles from '../Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  state = {
    listViewData : [{
      first: "hi",
      checked: false
    }],
    checked : false
  }
  
  render () {
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { }
    }];
  let index = 0;
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

            <View style={{backgroundColor:'rgb(241,241,241)',height:'100%'}}>
            <SafeAreaView style={{margin:18,height:'100%'}}>
                <Text style = {{color:'rgb(139, 135, 179)'}}>Today</Text>
                <SwipeListView
            data={this.state.listViewData}
            renderItem={ (data,checked) => (
                <View style={[styles.card,{flexDirection:'row'}]}>
                    <View style = {{backgroundColor:'rgb(30,209,2)',height:55,width:4,borderTopLeftRadius:10,borderBottomLeftRadius:10}}></View>
                    <TouchableOpacity onPress = {()=> {
                      this.state.checked ?
                      (this.setState({checked:false}))

                      :
                      (this.setState({checked:true}))
                    }
                      
                      }>
                      { this.state.checked ?
                      (<View style = {{margin:19,width:20,height:20,borderRadius:10,backgroundColor:'rgb(145,220,90)'}}></View>)
                      :
                      (
                      <View style = {{margin:19,width:20,height:20,borderRadius:10,borderRadius: 10,borderWidth:0.8,borderColor:'grey'}}></View>)

                      }

                      </TouchableOpacity>
                     <View style = {{justifyContent:'center'}}>
                        <Text style = {{color:'rgb(198,198,200)',fontSize:15}}>07.00 AM</Text>
                    </View>
                    <View style = {{justifyContent:'center'}}>
                    { this.state.checked ? 
                        (<View style = {{width:230,height:20,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style = {{color:'rgb(198,198,200)',fontSize:15,paddingLeft:18,fontStyle:'italic'}}>Meeting with client</Text>
                        <Image style={{width:15,height:15,}} source = {require('../../Images/notification1.png')}></Image>
                        </View>)

                        :
                        (<View style = {{width:230,height:20,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style = {{color:'rgb(85,78,143)',fontSize:15,paddingLeft:18}}>Meeting with client</Text>
                        <Image style={{width:15,height:15}} source = {require('../../Images/notification.png')}></Image>
                        </View>)
                    }
                    </View>
                </View>
            )}
            renderHiddenItem={ () => (
                <View style = {{height: 55,width:'100%',marginTop:18}}>
                    <View style ={{height: 55, alignItems:'flex-end',justifyContent:'center'}}>
                        <View style = {{backgroundColor:'rgb(255,207,207)',width:35,height:35,borderRadius:16,justifyContent:'center',alignItems:'center'}}>
                          <Image source = {require('../../Images/delete-16.png')}></Image>
                        </View>
                    </View>
                </View>
            )}
            rightOpenValue={-75}
        />
            </SafeAreaView>

            </View>
        </View>

    )
  }
}
