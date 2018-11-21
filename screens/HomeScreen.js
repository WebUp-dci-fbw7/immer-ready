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
    return (<View style={styles.container}>

      <View style={styles.contacts}>
        <Ionicons style={{
            marginLeft: responsiveWidth(7),
            marginBottom: responsiveHeight(35),
            fontSize: RF(22)
          }} name='md-contacts' onPress={() => {
            Alert.alert('you pressed to get contacts')
          }}/>

      {/* </View>
      <View style={styles.location}>
        <Entypo style={{
            marginLeft: responsiveWidth(7),
            marginBottom: responsiveHeight(35),
            fontSize: RF(19),
            color: "blue",
          }} name='location' onPress={() => {
            Alert.alert('Send Location!')
          }}/>
      </View>
      <View style={styles.phone}>
        <Feather style={{
            marginLeft: responsiveWidth(-15),
            fontSize: RF(17),
            color: "green",
            position: 'absolute',
            // textAlign: "center",
            // justifyContent:'center',
            // marginTop: responsiveHeight(20)
          }} name='phone-call' onPress={() => {
            Alert.alert('Call Contact!')
          }}/>
      </View>

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
  container: {
    flex: 1,
    flexDirection: 'row',
    // paddingTop: responsiveHeight(4),
    backgroundColor: 'yellow',
    // alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 10,
    left: 0,
    right: 0

  },

  contacts: {
    width: responsiveWidth(50),
    height: responsiveHeight(100),
    backgroundColor: '#607d8b',
    justifyContent: 'center',
    borderRightWidth: responsiveWidth(0.2),
    borderLeftWidth: responsiveWidth(0.2),
    borderLeftColor: 'white',
    borderRightColor: 'white',

  },

  location: {
    width: responsiveWidth(50),
    height: responsiveHeight(100),
    backgroundColor: '#555',
    justifyContent: 'center',
    borderRightWidth: responsiveWidth(0.2),
    borderLeftWidth: responsiveWidth(0.2),
    borderLeftColor: 'white',
    borderRightColor: 'white',
  },

  phone: {
    // backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: responsiveWidth(50),
    borderRightWidth:responsiveWidth(50),
    borderBottomWidth: responsiveWidth(80),
    borderBottomColor: '#bdbdbd',
    borderLeftColor: '#607d8b',
    borderRightColor: '#555',
    // width: responsiveWidth(0),
    // height: responsiveHeight(0),
    flex: 1,
    // width: responsiveWidth(100),
    // height: responsiveHeight(40),
    // backgroundColor: '#f00',
    overflow: 'visible',
    zIndex: 5,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',

  }

}); */}
