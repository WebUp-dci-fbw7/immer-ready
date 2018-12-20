import { Constants, Permissions, Contact } from "expo";
import SendSMS from "react-native-sms-x";
import { PermissionsAndroid, Alert } from "react-native";
import axios from "axios";

const allowSMS = async (number, { latitude, longitude }, cb) => {
  const apiKey = "AIzaSyABt5mFjSKdrnio24G8WVrcmegYX5G2EOM";

  const permission = await Permissions.askAsync(
    Permissions.CONTACTS,
    Permissions.SMS
  );
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.SEND_SMS,
    {
      title: " permission to send your location  "
    }
  );

  if (permission.status !== "granted") {
    // Permission was denied...
    Alert.alert(" Permission was denied...");
    return;
  }
  if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
    Alert.alert("Permission was denied...");
    return;
  }

  try {
    const locationResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&radius=100&key=${apiKey}`
    );

    const myLocation = locationResponse.data.results[0].formatted_address;

    const result = await SendSMS.send(
      /// i use the 123 number as unique id
      123,
      number,
      `Hello, I need your help at ${myLocation}! I am situated at: https://www.google.com/maps?z=17&q=${latitude},${longitude}/`,
      cb
    );
    return result;
  } catch (error) {
    Alert.alert("something went wrong please try again");
    console.error(error);
  }
};
export default allowSMS;
