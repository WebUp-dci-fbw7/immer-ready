import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Ionicons, Octicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import showContact from "../Controlers/getContacts";
export default class GetContact extends Component {
  state = {
    contacts: []
  };

  async componentDidMount() {
    const contacts = await showContact()
      .then(contact => {
        this.setState({
          contacts: contact
        });
      })
      .then(console.log)
      .catch(e => console.error(e));
    console.log(contacts);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <FontAwesome name="caret-up" size={350} />
        </View>
        <View style={{ marginLeft: "15%" }}>
          <TextInput>Hello wrlod </TextInput>
        </View>

        <View>
          <FontAwesome name="caret-down" size={350} />
        </View>
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
