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

import call from 'react-native-phone-call'
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
    language: 'en',
    pitch: 1.0,
    rate: 1.0,
    onError:()=> console.log('error')
  };
  componentDidMount(){
    Speech.speak('Hello This is Home page!',this.speakOpt
  );
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
              navigate("Secound")
              Speech.speak('Contacts', this.speakOpt
            );
            }}
          >
            <Ionicons
              name="md-contacts"
              aria-label="Contacts"
              style={{
                marginLeft: responsiveWidth(12),
                marginBottom: responsiveHeight(24),
                fontSize: RF(15),
                color:'#EDDEC7'
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
              if(!this.props.screenProps.contact.number){
                Speech.speak('Sorry! please select a contact',this.speakOpt
              );
              }else {
                Speech.speak('Well, Your location will be sent to the selected number',
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
                marginLeft: responsiveWidth(15),
                marginBottom: responsiveHeight(24),
                fontSize: RF(15),
                color: "#EDDEC7"
              }}
              name="location"
              size={85}
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
              marginLeft: responsiveWidth(-14),
              fontSize: RF(15),
              color: "#EDDEC7",
              position: "absolute"
            }}
            onPress={() => {
              if (this.props.screenProps.contact.number) {
                Speech.speak('Calling the selected Number',
                this.speakOpt
              );
                const number = this.props.screenProps.contact.number
                const phoneCall = {
                  number:`${number}` ,
                  prompt: false
                }
              call(phoneCall).catch(console.error)
              }else {
                Speech.speak('No contact selected',
                this.speakOpt
              );
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
    backgroundColor: "#BF9788",
    justifyContent: "center",
    borderRightWidth: responsiveWidth(0.2),
    borderLeftWidth: responsiveWidth(0.2),
    borderRightColor: "white"
  },

  location: {
    width: responsiveWidth(50),
    height: responsiveHeight(100),
    backgroundColor: "#947C66",
    justifyContent: "center",
    borderRightWidth: responsiveWidth(0.2),
    borderLeftWidth: responsiveWidth(0.2),
    borderLeftColor: "white",

  },

  phone: {
    borderStyle: "solid",
    borderLeftWidth: responsiveWidth(50),
    borderRightWidth: responsiveWidth(50),
    borderBottomWidth: responsiveWidth(80),
    borderBottomColor: "#99B55D",
    borderLeftColor: "#BF9788",
    borderRightColor: "#947C66",
    flex: 1,
    position: "absolute",
    bottom: 0,
    justifyContent: "center"
  }
});
