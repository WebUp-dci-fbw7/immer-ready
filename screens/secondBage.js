import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import { WebBrowser } from "expo";
import {Button} from 'react-native-elements';
import { Ionicons, Octicons,AntDesign } from '@expo/vector-icons';
// import { Permissions, Contacts } from 'expo';

import { MonoText } from "../components/StyledText";
import GetContact from '../components/getContact';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>



        <GetContact />


      </View>
    );
  }


  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   width: '100%',
   justifyContent: 'center',
   alignItems: 'stretch'
  },
});
