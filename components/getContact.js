import React, {Component, Fragment} from 'react'
import   {View,TextInput} from "react-native";
import { Ionicons, Octicons,AntDesign, FontAwesome } from '@expo/vector-icons';


export default class GetContact extends Component{
  render(){
    return (
      <View>
      <FontAwesome name="chevron-circle-up" size={260} color="green"  style={{marginLeft: 93}}/>



   <FontAwesome name="chevron-circle-down" size={260} color="green"   style={{marginLeft: 93}}/>
</View>
    )
  }
}
