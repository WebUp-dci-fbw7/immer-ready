import React, { Component } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Badge } from 'react-native-elements';
import showContact from "../Controlers/getContacts";
export default class GetContact extends Component {
  state = {
    contacts: [],
    index: 0,
    loading: true
  };

  componentDidMount() {
    showContact().then(contact => {
      console.log("befor");
      this.setState({
        contacts: contact,
        loading: false
      });
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
    return (
      <View style={styles.container}>
        <View style={styles.topBottom}>
          <FontAwesome 
            name="caret-up"
            onPress={this.keyUp}
            style={styles.upIcon} 
            />
        </View>
        <View style={styles.center}>
        <Badge containerStyle={{ 
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: 'green'
          }}>
          <Text style={{fontSize:25}}>
            {this.state.loading
              ? "loading...."
              : this.state.contacts[this.state.index].name}
          </Text>
          <Text style={{fontSize:25}}> 
            {this.state.loading
              ? "loading...."
              : this.state.contacts[this.state.index].number}
          </Text>
        </Badge>
        </View>
        <View style={styles.topBottom}>
          <FontAwesome 
            name="caret-down" 
            onPress={this.keyDown}
            style={styles.downIcon}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  topBottom: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0'
  },
  center : {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0'
  },
  upIcon: {
    fontSize: 350,
    marginBottom: 35
  },
  downIcon: {
    fontSize: 350
  }
});
