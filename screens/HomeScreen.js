import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import {Button} from 'react-native-elements';
// import { Permissions, Contacts } from 'expo';

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  // async showFirstContactAsync() {
  //    // Ask for permission to query contacts.
  //    const permission = await Permissions.askAsync(Permissions.CONTACTS);
  //
  //    if (permission.status !== 'granted') {
  //      // Permission was denied...
  //      return;
  //    }
  //    const contacts = await Contacts.getContactsAsync({
  //
  //    });
  //    console.log(contacts,'ebw')
  //  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>

          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}



            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            >
              <MonoText style={styles.codeHighlightText}>

              </MonoText>
            </View>


          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity
              onPress={this._handleHelpPress}
              style={styles.helpLink}
            >


            </TouchableOpacity>
          </View>
        </ScrollView>



        <View style={{flex: 1, paddingTop: 40, height:100, backgroundColor:'skyblue',}}>
       <Button title='Get myContact'  />
     </View>

    <View style={{flex: 1, paddingTop: 40, height:100, backgroundColor:'skyblue', marginTop:20}}>
   <Button title='Get myContact'  />
 </View>


      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>

        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>

        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes"
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },

  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});
