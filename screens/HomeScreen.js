import React from "react";
import { ScrollView, View, Alert, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { WebBrowser, Permissions, Constants, Location } from "expo";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import RF from "react-native-responsive-fontsize";
import getLocationAsync from "../Controlers/getGeoLocation";
import allowSMS from "../Controlers/SendSMS";
import { createStackNavigator } from "react-navigation";

export default class Main extends React.Component {
  state = {
    contact: {}
  };
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    // console.log(this.props.screenProps.contact.numbers);
    // console.log(this.props.navigation.getParam);
    return (
      <View style={styles.container}>
        <View style={styles.contacts}>
          <Ionicons
            name="md-contacts"
            style={{
              marginLeft: responsiveWidth(7),
              marginBottom: responsiveHeight(35),
              fontSize: RF(22)
            }}
            onPress={() => {
              navigate("Secound");
            }}
          />
        </View>
        <View style={styles.location}>
          <Entypo
            style={{
              marginLeft: responsiveWidth(7),
              marginBottom: responsiveHeight(35),
              fontSize: RF(19),
              color: "blue"
            }}
            name="location"
            onPress={() => {
              Alert.alert("Send Location!");
            }}
          />
        </View>

        <View style={styles.phone}>
          <Feather
            style={{
              marginLeft: responsiveWidth(-15),
              fontSize: RF(17),
              color: "green",
              position: "absolute"
            }}
            name="phone-call"
            onPress={() => {
              Alert.alert("Call Contact!");
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
    backgroundColor: "yellow",
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
    backgroundColor: "#607d8b",
    justifyContent: "center",
    borderRightWidth: responsiveWidth(0.2),
    borderLeftWidth: responsiveWidth(0.2),
    borderLeftColor: "white",
    borderRightColor: "white"
  },

  location: {
    width: responsiveWidth(50),
    height: responsiveHeight(100),
    backgroundColor: "#555",
    justifyContent: "center",
    borderRightWidth: responsiveWidth(0.2),
    borderLeftWidth: responsiveWidth(0.2),
    borderLeftColor: "white",
    borderRightColor: "white"
  },

  phone: {
    borderStyle: "solid",
    borderLeftWidth: responsiveWidth(50),
    borderRightWidth: responsiveWidth(50),
    borderBottomWidth: responsiveWidth(80),
    borderBottomColor: "#bdbdbd",
    borderLeftColor: "#607d8b",
    borderRightColor: "#555",
    flex: 1,
    overflow: "visible",
    zIndex: 5,
    position: "absolute",
    bottom: 0,
    justifyContent: "center"
  }
});
