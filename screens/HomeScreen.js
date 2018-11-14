import React from "react";
import {
  ScrollView,
  View,
  Alert,
  Navigator
} from "react-native";

import {WebBrowser} from "expo";

import GetContact from './getContact';
import Main from './Main';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };


  render() {
    return (
      <Navigator
      initialRoute={{
        id:'Main'
      }}
      renderScene={
        this.navigatorRenderScene
      }
      />
    );
  }

navigatorRenderScene(route, navigator){
  _navigator = navigator;
  switch (route.id){
    case 'Main':
    return(<Main navigator={navigator} title='Main' />);
    case 'GetContact':
    return(<GetContact navigator={navigator} title='GetContact' />);
  }
}

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync("https://docs.expo.io/versions/latest/guides/development-mode");
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync("https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes");
  };
}
