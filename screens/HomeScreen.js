import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import { Button } from "react-native-elements";
import { Constants, Location, Permissions, Contacts } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    errorMessage: null
  };

  static navigationOptions = {
    header: null
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  };

  render() {
    let latitude = "";
    let longitude = "";
    let initialText = "Waiting for location";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.latitude && this.state.longitude) {
      latitude = JSON.stringify(this.state.latitude);
      longitude = JSON.stringify(this.state.longitude);
      // console.log(text);
    }

    async function alowSMS() {
      const permission = await Permissions.askAsync(
        Permissions.CONTACTS,
        Permissions.SMS
      );

      if (permission.status !== "granted") {
        // Permission was denied...
        return;
      }
      const { result } = await Expo.SMS.sendSMSAsync(
        "+4915163180836",
        `https://www.google.com/maps/@${latitude},${longitude},17z`
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {`${latitude}` && `${longitude}`
            ? `https://www.google.com/maps/@${latitude},${longitude},17z`
            : "Waiting for location..."}
        </Text>

        <View>
          <Button title="Get location" onPress={this._getLocationAsync} />
          <Button title="Send location via SMS" onPress={alowSMS} />
        </View>
      </View>
    );
  }

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );
  //
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use
  //         useful development tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

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
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center"
  }
});
