import React from "react";
import {
  ScrollView,
  View,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { WebBrowser, Permissions, Constants, Location, Speech } from "expo";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import getLocationAsync from "../Controlers/getGeoLocation";
import allowSMS from "../Controlers/SendSMS";

import call from "react-native-phone-call";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import RF from "react-native-responsive-fontsize";

export default class Main extends React.Component {
  static navigationOptions = {
    header: null
  };
  speakOpt = {
    language: "en",
    pitch: 1.0,
    rate: 1.0,
    onError: () => console.log("error")
  };
  componentDidMount() {
    Speech.speak(" press left to choose contact!", this.speakOpt);
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.contacts}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Contacts"
            accessibilityHint="Navigates to the next screen"
            onPress={() => {
              navigate("Secound");
              Speech.speak("Contacts", this.speakOpt);
            }}
          >
            <Ionicons
              name="md-contacts"
              aria-label="Contacts"
              style={{
                marginLeft: responsiveWidth(7),
                marginBottom: responsiveHeight(24),
                fontSize: RF(20),
                color: "white"
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.location}>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Location"
            accessibilityHint="Send your Location "
            onPress={async () => {
              if (!this.props.screenProps.contact.number) {
                Speech.speak("Sorry! please select a contact", this.speakOpt);
              } else {
                Speech.speak(
                  "Well, Your location will be sent to the selected number",
                  this.speakOpt
                );
                const location = await getLocationAsync();

                const result = await allowSMS(
                  this.props.screenProps.contact.number,
                  location.coords
                );
              }
            }}
          >
            <Entypo
              aria-label="Location"
              style={{
                marginLeft: responsiveWidth(7),
                marginBottom: responsiveHeight(24),
                fontSize: RF(20),
                color: "white"
              }}
              name="location-pin"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.phone}>
          <Feather
            accessible={true}
            accessibilityLabel="Phone-call"
            accessibilityHint="call the number you chose"
            name="phone-call"
            style={{
              marginLeft: responsiveWidth(-17),
              fontSize: RF(20),
              color: "black",
              position: "absolute",
              paddingTop: responsiveHeight(18)
            }}
            onPress={() => {
              if (this.props.screenProps.contact.number) {
                Speech.speak("Calling the selected Number", this.speakOpt);
                const number = this.props.screenProps.contact.number;
                const phoneCall = {
                  number: `${number}`,
                  prompt: false
                };
                call(phoneCall).catch(console.error);
              } else {
                Speech.speak("No contact selected", this.speakOpt);
              }
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    zIndex: 10,
    left: 0,
    right: 0
  },

  contacts: {
    width: responsiveWidth(50),
    height: responsiveHeight(100),
    backgroundColor: "black",
    justifyContent: "center",
    borderRightWidth: responsiveWidth(0.2),
    borderLeftWidth: responsiveWidth(0.2),
    borderRightColor: "white"
  },

  location: {
    width: responsiveWidth(50),
    height: responsiveHeight(100),
    backgroundColor: "black",
    justifyContent: "center",
    borderRightWidth: responsiveWidth(0.2),
    borderLeftWidth: responsiveWidth(0.2),
    borderLeftColor: "white"
  },

  phone: {
    borderStyle: "solid",
    borderLeftWidth: responsiveWidth(50),
    borderRightWidth: responsiveWidth(50),
    borderBottomWidth: responsiveWidth(80),
    borderBottomColor: "white",
    borderLeftColor: "black",
    borderRightColor: "black",
    flex: 1,
    position: "absolute",
    bottom: 0,
    justifyContent: "center"
  }
});
