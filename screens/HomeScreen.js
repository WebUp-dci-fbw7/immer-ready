import React from "react";
import {
  ScrollView,
  View,
  Alert,
  StyleSheet,
  Text,

} from "react-native";
import {Button } from 'react-native-elements';
import {WebBrowser} from "expo";
import {Ionicons, Feather, Entypo} from '@expo/vector-icons';
import GetContact from './getContact';
import {createStackNavigator} from 'react-navigation';

export default class Main extends React.Component {
  static navigationOptions = {
    header: null
  };



  render() {
      const { navigate } = this.props.navigation;
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
              onPress={() => {

                navigate('Secound')}}
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
      </View>
    );
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
