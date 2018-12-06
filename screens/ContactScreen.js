import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity
} from "react-native";
import { Badge } from "react-native-elements";
import {Speech} from 'expo'
import { Ionicons, Octicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "react-navigation";
import showContact from "../Controlers/getContacts";
export default class GetContact extends Component {
  state = {
    contacts: [],
    index: 0,
    loading: true
  };

  componentDidMount() {
    Speech.speak('press up or down to select a contact!',
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
    showContact().then(contact => {
      this.setState({ contacts: contact, loading: false });
    });
  }
  keyUp = () => {
    if (this.state.index === 0) {
      return;
    } else {
      Speech.speak(this.state.contacts[this.state.index - 1].name,{
        language: 'en',
        pitch: 1.0,
        rate: 1.0,
        onStart: ()=> console.log('speak started'),
        onDone : ()=> console.log('speak done'),
        onStopped:()=> console.log('speak stopped'),
        onError:()=> console.log('error')
      })
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  keyDown = () => {
    if (this.state.index >= this.state.contacts.length - 1) {
      return Alert.alert("Sorry dude No more contacts!");
    } else {
      Speech.speak(this.state.contacts[this.state.index + 1].name,{
        language: 'en',

        pitch: 1.0,
        rate: 1.0,
        onStart: ()=> console.log('speak started'),
        onDone : ()=> console.log('speak done'),
        onStopped:()=> console.log('speak stopped'),
        onError:()=> console.log('error')
      })
      this.setState({
        index: this.state.index + 1
      });
    }
  };


  render() {

    const { navigate } = this.props.navigation;
    // console.log("contact: ", this.props.screenProps.contact);
    return (
      <View style={styles.container}>
        <View style={styles.topBottom}>
          <FontAwesome

            accessible={true}
            accessibilityLabel="UP"
            accessibilityHint="click to see the previous number"
            name="caret-up"
            onPress={this.keyUp}
            style={styles.upIcon}
          />
        </View>

        <Badge
          containerStyle={{
            backgroundColor: "green"
          }}
          onPress={() => {
            Speech.speak('You selected a contact!',
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
            this.props.screenProps.passState(
              this.state.contacts[this.state.index]
            );
            navigate("Home");
          }}
        >
          <Text style={{ fontSize: 25 }}>

            {this.state.loading
              ? "loading...."
              :this.state.contacts[this.state.index].name}

          </Text>
          <Text style={{ fontSize: 25 }}>
            {this.state.loading
              ? "loading...."
              : this.state.contacts[this.state.index].number}
          </Text>

        </Badge>

        <View style={styles.topBottom}>
          <FontAwesome
            accessible={true}
            accessibilityLabel="Down"
            accessibilityHint="click to see the next number"
            name="caret-down"
            onPress={this.keyDown}
            style={styles.downIcon}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topBottom: {
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0"
  },
  center: {
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0"
  },
  upIcon: {
    fontSize: 350,
    marginBottom: 35
  },
  downIcon: {
    fontSize: 350
  }
});
