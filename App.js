import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/Switch";

import showContact from "./Controlers/getContacts";
import requestPhonePermission from "./Controlers/PhoneCall";
export default class App extends React.Component {
  state = {
    contact: {},
    isLoadingComplete: false,
    phoneCall: false
  };

  passState = contact => {
    this.setState({
      contact
    });
  };
  componentDidMount() {
    requestPhonePermission().then(allowed => {
      this.setState({
        phoneCall: allowed
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator
          screenProps={{
            contact: this.state.contact,
            passState: this.passState,
            phoneCall: this.state.phoneCall
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
