import React from "react";
import {
  ScrollView,
  View,
  Alert,
  StyleSheet
} from "react-native";
import {Button } from 'react-native-elements';
import {WebBrowser} from "expo";
import {Ionicons, Feather, Entypo} from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

onButtonPrees(){
  this.props.navigator.push({
    id:'CetContact'
  })
}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{
            height: 100,
            backgroundColor:'powderblue',
            justifyContent: 'center'
          }}>
            <Ionicons
              name='md-contacts'
              size={85}
              onPress={this.onButtonPrees.bind(this)}
              />
          </View>
          <View style={{
            height: 100,
            backgroundColor:'skyblue',
            justifyContent: 'center'
          }}>
            <Entypo
              name='location'
              size={85}
              onPress={()=> {
                Alert.alert('Send Location!')
              }}
              />
          </View>

          <View style={{
            height: 100,
            backgroundColor:'steelblue',
            justifyContent: 'center'
          }}>
            <Feather
              name='phone-call'
              size= {85}

              onPress={()=> {
                Alert.alert('Call Contact!')
              }}
              />
          </View>

        </ScrollView>
      </View>);
  }
