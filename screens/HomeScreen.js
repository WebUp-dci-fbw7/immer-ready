import React from "react";
import { ScrollView, View, Alert, StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import { WebBrowser, Linking, SMS, Permissions } from "expo"; // tis was imported to test call and send message
import { Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation";
/// Import the  Screen
import GetContact from "./ContactScreen";

export default class Main extends React.Component {
  static navigationOptions = {
    header: null
  };

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
              onPress={this.sendMessage}
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
              onPress={this.callNumber}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
  // 'this gives permissions to linking and sms' 
askLPermissionsAsync = async ()=>{
  await Permissions.askAsync(Permissions.Linking);
};

askSMSPermissionsAsync = async ()=> {
  await Permissions.askAsync(Permissions.SMS);
};
//
callNumber = async () => {
  this.askLPermissionsAsync();
  let result = await Linking.openURL('tel:015226804589');
  return result;  
};

sendMessage = async ()=> {
  this.askSMSPermissionsAsync();
  let result = await SMS.sendSMSAsync(['017661543884'], 'Hello Bro');
  return result;
};

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    alignItems: "stretch",

    justifyContent: "center"
  }
});
