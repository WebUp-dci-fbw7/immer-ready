import React, {Component} from 'react'
import   {View,TextInput, Text, StyleSheet} from "react-native";
import { Ionicons, Octicons,AntDesign, FontAwesome } from '@expo/vector-icons';

export default class GetContact extends Component{

render(){
  return(
    <View style={styles.container}>
        <View>
        <FontAwesome name="caret-up" size={350}/>
        </View>
  <View style={{marginLeft:'15%'}}>
        <TextInput

                 placeholder="Immer Ready!"

               />
  </View>

    <View>
     <FontAwesome name="caret-down" size={350}/>
  </View>
    </View>
  )
}


}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:24,
    alignItems :'stretch',

    justifyContent: 'center'
  },
});
