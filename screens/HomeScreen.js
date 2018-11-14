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
              onPress={()=> {
                Alert.alert('you pressed to get contacts')
              }}
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

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync("https://docs.expo.io/versions/latest/guides/development-mode");
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync("https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes");
  };
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:24,
    backgroundColor: '#ff2',
    alignItems :'stretch',

    justifyContent: 'center'
  },
});
