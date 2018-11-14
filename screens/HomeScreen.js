import React from "react";
import {
  ScrollView,
  View,
  Alert
} from "react-native";
import {Button} from 'react-native-elements';
import {WebBrowser} from "expo";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View>
            <Button 
              title='Get contacts'
              onPress={()=> {
                Alert.alert('you pressed to get contacts')
              }}
              />
          </View>
          <View>
            <Button 
              title='Send Location'
              onPress={()=> {
                Alert.alert('Send Location!')
              }}
              />
          </View>
          
          <View>
            <Button 
              title='Call Contact'
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

