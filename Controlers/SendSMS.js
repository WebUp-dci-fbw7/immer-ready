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

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&radius=100&key=${apiKey}`
    )
    .then(function(response) {
      let mylocation = response.data.results[0].formatted_address;
      console.log(response.data.results[0].formatted_address);
    })

    .catch(function(error) {
      console.log(error);
    });

  const { result } = await Expo.SMS.sendSMSAsync(
    number,
    `I need your help at ${myLocation}! I am situated at: https://www.google.com/maps/@${latitude},${longitude},17z/`
  );
  return result;
};
export default allowSMS;
