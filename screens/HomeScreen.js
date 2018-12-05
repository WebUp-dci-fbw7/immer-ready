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
  componentDidMount(){
    Speech.speak('Hello This is Home page',
    {
      language: 'en',
      pitch: 1.0,
      rate: 1.0,
      onStart: ()=> console.log('speak started'),
      onDone : ()=> console.log('speak done'),
      onStopped:()=> console.log('speak stopped'),
      onError:()=> console.log('error')
    }
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
              Speech.speak('Contacts',
              {
                language: 'en',
                pitch: 1.0,
                rate: 1.0,
                onStart: ()=> console.log('speak started'),
                onDone : ()=> console.log('speak done'),
                onStopped:()=> console.log('speak stopped'),
                onError:()=> console.log('error')
              }
            );
            }}
          >
            <Ionicons
              name="md-contacts"
              aria-label="Contacts"
              style={{
                marginLeft: responsiveWidth(7),
                marginBottom: responsiveHeight(24),
                fontSize: RF(15)
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
                Speech.speak('No Contact selected!',
                {
                  language: 'en',
                  pitch: 1.0,
                  rate: 1.0,
                  onStart: ()=> console.log('speak started'),
                  onDone : ()=> console.log('speak done'),
                  onStopped:()=> console.log('speak stopped'),
                  onError:()=> console.log('error')
                }
              );
              }else {
                Speech.speak('Well, Your location will be sent to the selected number',
                {
                  language: 'en',
                  pitch: 1.0,
                  rate: 1.0,
                  onStart: ()=> console.log('speak started'),
                  onDone : ()=> console.log('speak done'),
                  onStopped:()=> console.log('speak stopped'),
                  onError:()=> console.log('error')
                }
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
                fontSize: RF(15),
                color: "blue"
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
              color: "green",
              position: "absolute"
            }}
            onPress={() => {
              if (this.props.screenProps.contact.number) {
                Speech.speak('Calling the selected Number',
                {
                  language: 'en',
                  pitch: 1.0,
                  rate: 1.0,
                  onStart: ()=> console.log('speak started'),
                  onDone : ()=> console.log('speak done'),
                  onStopped:()=> console.log('speak stopped'),
                  onError:()=> console.log('error')
                }
              );
                const number = this.props.screenProps.contact.number
                const phoneCall = {
                  number:`${number}` ,
                  prompt: false
                }
              call(phoneCall).catch(console.error)
              }else {
                Speech.speak('No contact selected',
                {
                  language: 'en',
                  pitch: 1.0,
                  rate: 1.0,
                  onStart: ()=> console.log('speak started'),
                  onDone : ()=> console.log('speak done'),
                  onStopped:()=> console.log('speak stopped'),
                  onError:()=> console.log('error')
                }
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
    backgroundColor: "#607d8b",
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
    borderBottomColor: "#b0bec5",
    borderLeftColor: "#607d8b",
    borderRightColor: "#607d8b",
    flex: 1,
    position: "absolute",
    bottom: 0,
    justifyContent: "center"
  }
});
