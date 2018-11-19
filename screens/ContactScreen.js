import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Ionicons, Octicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import showContact from "../Controlers/getContacts";
export default class GetContact extends Component {
  state = {
    contact: [],
    index: 0
  };

  componentDidMount() {
    showContact().then(contact => {
      console.log("befor");
      this.setState({
        contact
      });
      console.log("affter");
    });
  }
  render() {
    console.log(this.state.contact);
    return (
      <View style={styles.container}>
        <View>
          <FontAwesome name="caret-up" size={350} />
        </View>
        <View style={{ marginLeft: "15%" }}>
          <Text>{this.state.contact[this.state.index + 1]}</Text>
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
