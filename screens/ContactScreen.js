import React, { Component } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import { Badge } from "react-native-elements";
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
    showContact().then(contact => {
      this.setState({ contacts: contact, loading: false });
    });
  }
  keyUp = () => {
    if (this.state.index === 0) {
      return;
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  keyDown = () => {
    if (this.state.index >= this.state.contacts.length - 1) {
      return Alert.alert("Sorry dude No more contacts!");
    } else {
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
        <View>
          <FontAwesome name="caret-up" size={350} onPress={this.keyUp} />
        </View>

        <Badge
          containerStyle={{
            backgroundColor: "green"
          }}
          onPress={() => {
            this.props.screenProps.passState(
              this.state.contacts[this.state.index]
            );
            navigate("Home");
          }}
        >
          <Text>
            {this.state.loading
              ? "loading...."
              : this.state.contacts[this.state.index].name}
          </Text>
          <Text>
            {this.state.loading
              ? "loading...."
              : this.state.contacts[this.state.index].number}
          </Text>
        </Badge>

        <View>
          <FontAwesome name="caret-down" size={350} onPress={this.keyDown} />
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
