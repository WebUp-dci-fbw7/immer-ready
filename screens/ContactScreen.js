import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Ionicons, Octicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import showContact from "../Controlers/getContacts";
export default class GetContact extends Component {
  state = {
    contact: []
  };

  async componentDidMount() {
    const contacts = await showContact()
      this.setState({
        contact : contacts

      })

    }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <FontAwesome name="caret-up" size={350} />
        </View>
        <View style={{ marginLeft: "15%" }}>
          {this.state.contact.map(item=>{
          return  <TextInput key={item}>{item.name}</TextInput>

          })}

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
