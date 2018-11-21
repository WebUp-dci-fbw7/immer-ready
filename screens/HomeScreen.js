import React from "react";
import { ScrollView, View, Alert, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { WebBrowser, Permissions } from "expo";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";

/// Import the  Screen
import GetContact from "./ContactScreen";
import getGeolocation from "../Controlers/getGeoLocation";

export default class Main extends React.Component {
  state = {
    contact: {},
    latitude: null,
    longitude: null
  };
  static navigationOptions = {
    header: null
  };

  async alowSMS() {
    const permission = await Permissions.askAsync(
      Permissions.CONTACTS,
      Permissions.SMS
    );

    let initialText = "Waiting for location";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.latitude && this.state.longitude) {
      latitude = JSON.stringify(this.state.latitude);
      longitude = JSON.stringify(this.state.longitude);
    }
    console.log(this.state.latitude);

    if (permission.status !== "granted") {
      // Permission was denied...
      return;
    }
    const number = this.props.screenProps.contact.number;

    const { result } = await Expo.SMS.sendSMSAsync(
      number,
      `https://www.google.com/maps/@${latitude},${longitude},17z`
    );
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              height: 100,
              backgroundColor: "powderblue",
              justifyContent: "center"
            }}
          >
            <Ionicons
              name="md-contacts"
              size={85}
              onPress={() => {
                navigate("Secound");
              }}
            />
          </View>
          <View
            style={{
              height: 100,
              backgroundColor: "skyblue",
              justifyContent: "center"
            }}
          >
            <Entypo
              name="location"
              size={85}
              onPress={() => {
                Alert.alert("Send Location!");
                this.alowSMS();
              }}
            />
          </View>

          <View
            style={{
              height: 100,
              backgroundColor: "steelblue",
              justifyContent: "center"
            }}
          >
            <Feather
              name="phone-call"
              size={85}
              onPress={() => {
                Alert.alert("Call Contact!");
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    alignItems: "stretch",

    justifyContent: "center"
  }
});
