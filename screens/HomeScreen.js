import React from "react";
import { ScrollView, View, Alert, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { WebBrowser } from "expo";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation";
/// Import the  Screen
import GetContact from "./ContactScreen";
import getGeolocation from "../Controlers/getGeoLocation";

export default class Main extends React.Component {
  state = {
    contacts: []
  };
  static navigationOptions = {
    header: null
  };

  componentDidUpdate() {
    if (!this.props.navigation.state.params.contacts) {
      return;
    }
    console.log(this.props.navigation.state.params.contacts.number);
  }

  render() {
    const { navigate } = this.props.navigation;
    let text = "";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

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
