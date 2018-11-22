import React from "react";
import { ScrollView, View, Alert, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { WebBrowser, Permissions, Constants, Location } from "expo";
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import getLocationAsync from "../Controlers/getGeoLocation";
import allowSMS from "../Controlers/SendSMS";

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
              onPress={async () => {
                const location = await getLocationAsync();
                const result = await allowSMS(
                  this.props.screenProps.contact.number,
                  location.coords
                );
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
