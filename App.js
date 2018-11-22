import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/Switch";

import showContact from "./Controlers/getContacts";

export default class App extends React.Component {
  state = {
    contact: {},
    isLoadingComplete: false
  };

  passState = contact => {
    this.setState({
      contact
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator
          screenProps={{
            contact: this.state.contact,
            passState: this.passState
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
