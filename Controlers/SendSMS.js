import { Constants, Permissions, Contact } from "expo";
import { SMS } from "expo";
import SendSMS from "react-native-sms";
import axios from "axios";

const allowSMS = async (number, { latitude, longitude }) => {
  const apiKey = "AIzaSyABt5mFjSKdrnio24G8WVrcmegYX5G2EOM";

  const permission = await Permissions.askAsync(
    Permissions.CONTACTS,
    Permissions.SMS
  );

  if (permission.status !== "granted") {
    // Permission was denied...

    return;
  }

  try {
    const locationResponse = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&radius=100&key=${apiKey}`
    );

    const myLocation = locationResponse.data.results[0].formatted_address;

    const { result } = await Expo.SMS.sendSMSAsync(
      number,
      `Hello, I need your help at ${myLocation}! I am situated at: https://www.google.com/maps?z=17&q=${latitude},${longitude}/`
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
export default allowSMS;
